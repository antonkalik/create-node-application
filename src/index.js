#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { exec, execSync } = require("child_process");

function createKoaApp(appName) {
  console.log("Creating Koa app...");
}

const frameworkFunctions = {
  express: createExpressApp,
  koa: createKoaApp,
};

function executeCommand(command, cwd, onProgress, onComplete) {
  const child = exec(command, { cwd });

  child.stdout.on("data", (data) => {
    onProgress(data);
  });

  child.stderr.on("data", (data) => {
    onProgress(data);
  });

  child.on("exit", onComplete);
}

function showProgress(message, maxDots = 50) {
  process.stdout.write(message + " ");
  let dotCounter = 0;

  const interval = setInterval(() => {
    if (dotCounter < maxDots) {
      process.stdout.write(".");
      dotCounter++;
    } else {
      clearInterval(interval);
    }
  }, 500);

  return interval;
}

function createExpressApp(appName) {
  const basePath = path.join(process.cwd(), appName);
  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath, { recursive: true });
    fs.mkdirSync(path.join(basePath, "src"));
  }

  execSync("npm init -y", { cwd: basePath });

  const dependencies = ["express"];
  const devDependencies = [
    "typescript",
    "@types/node",
    "@types/express",
    "ts-node",
    "nodemon",
  ];

  const progress = showProgress("Installing core dependencies");
  executeCommand(
    `npm install ${dependencies.join(" ")}`,
    basePath,
    (data) => {},
    () => {
      clearInterval(progress);
      console.log(" Done!");

      const devProgress = showProgress("Installing development dependencies");
      executeCommand(
        `npm install -D ${devDependencies.join(" ")}`,
        basePath,
        (data) => {},
        () => {
          clearInterval(devProgress);
          console.log(" Done!");

          const tsconfig = {
            compilerOptions: {
              target: "ES2020",
              module: "commonjs",
              outDir: "./dist",
              strict: true,
              esModuleInterop: true,
            },
            include: ["src/**/*.ts"],
            exclude: ["node_modules"],
          };
          fs.writeFileSync(
            path.join(basePath, "tsconfig.json"),
            JSON.stringify(tsconfig, null, 2),
          );

          const packagePath = path.join(basePath, "package.json");
          const packageJSON = require(packagePath);

          packageJSON.scripts = {
            start: "node dist/index.js",
            dev: "nodemon src/index.ts",
            build: "tsc",
          };
          fs.writeFileSync(packagePath, JSON.stringify(packageJSON, null, 2));

          const indexContent = `
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => {
    console.log(\`App listening at http://localhost:\${PORT}\`);
});
`;
          fs.writeFileSync(
            path.join(basePath, "src", "index.ts"),
            indexContent.trim(),
          );

          console.log(`${appName} - Express app created successfully!`);
        },
      );
    },
  );
}


const [appName, ...args] = process.argv.slice(2);

function argsToObject(args) {
  return args.reduce((acc, arg) => {
    const [key, value] = arg.replace(/^-+/,'').split('=');
    acc[key] = isNaN(value) ? value : Number(value);
    return acc;
  }, {});
}

const argsObject = argsToObject(args);

const framework = argsObject.framework || argsObject.fw;

if (!framework) {
  console.log("No framework specified.");
  process.exit(1);
}

const setupFunction = frameworkFunctions[framework];

if (setupFunction) {
  setupFunction(appName);
} else {
  console.log("Unsupported framework or no framework specified.");
}
