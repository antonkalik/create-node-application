const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const showProgress = require("../functions/showProgress");
const executeCommand = require("../functions/executeCommand");
const getExpressContent = require("../indexContent/getExpressContent");
const log = require("../functions/log");

const dependencies = ["express"];
const devDependencies = [
  "typescript",
  "@types/node",
  "@types/express",
  "esbuild",
  "ts-node",
  "nodemon",
  "eslint",
];

function createExpressApp(appName) {
  const basePath = path.join(process.cwd(), appName);
  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath, { recursive: true });
    fs.mkdirSync(path.join(basePath, "src"));
  }

  execSync("npm init -y", { cwd: basePath });

  const progress = showProgress("Installing core dependencies");
  executeCommand(
    `npm install ${dependencies.join(" ")}`,
    basePath,
    () => {},
    () => {
      clearInterval(progress);
      log.success("Done!");

      const devProgress = showProgress("Installing development dependencies");
      executeCommand(
        `npm install -D ${devDependencies.join(" ")}`,
        basePath,
        (data) => {},
        () => {
          clearInterval(devProgress);
          log.success("Done!");

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
            build:
              "esbuild src/index.ts --bundle --platform=node --outfile=dist/index.js",
            dev: "nodemon -r ts-node/register src/index.ts",
            lint: "eslint 'src/**/*.{ts,tsx}'",
            "lint:fix": "eslint 'src/**/*.{ts,tsx}' --fix",
            format: "prettier --write 'src/**/*.{ts,tsx}'",
          };

          fs.writeFileSync(packagePath, JSON.stringify(packageJSON, null, 2));

          const indexContent = getExpressContent();
          fs.writeFileSync(
            path.join(basePath, "src", "index.ts"),
            indexContent.trim(),
          );

          log.success(`${appName} - Express app created successfully!`);
        },
      );
    },
  );
}

module.exports = createExpressApp;
