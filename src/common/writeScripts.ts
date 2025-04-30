import path from "node:path";
import { promises as fs } from "node:fs";

async function writeScripts(basePath: string) {
  const packagePath = path.join(basePath, "package.json");
  const data = await fs.readFile(packagePath, "utf8");
  const packageJSON = JSON.parse(data);
  packageJSON.scripts = {
    start: "node dist/index.js",
    build:
      "esbuild src/index.ts --bundle --platform=node --format=cjs --outfile=dist/index.js",
    dev: "nodemon -r ts-node/register src/index.ts",
    lint: "eslint 'src/**/*.ts'",
    "lint:fix": "eslint 'src/**/*.ts' --fix",
    format: "prettier --write 'src/**/*.ts'",
  };
  return await fs.writeFile(packagePath, JSON.stringify(packageJSON, null, 2));
}

export default writeScripts;
