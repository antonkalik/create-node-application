const path = require("path");
const fs = require("fs").promises;

function writeScripts(basePath) {
  const packagePath = path.join(basePath, "package.json");
  return fs.readFile(packagePath, "utf8").then((data) => {
    const packageJSON = JSON.parse(data);

    packageJSON.scripts = {
      start: "node dist/index.js",
      build:
        "esbuild src/index.ts --bundle --platform=node --outfile=dist/index.js",
      dev: "nodemon -r ts-node/register src/index.ts",
      lint: "eslint 'src/**/*.{ts,tsx}'",
      "lint:fix": "eslint 'src/**/*.{ts,tsx}' --fix",
      format: "prettier --write 'src/**/*.{ts,tsx}'",
    };

    return fs.writeFile(packagePath, JSON.stringify(packageJSON, null, 2));
  });
}

module.exports = writeScripts;
