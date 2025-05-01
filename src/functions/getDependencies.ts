import { Framework } from "../types";

const commonDevDependencies = [
  "@eslint/js",
  "@types/node",
  "globals",
  "esbuild",
  "eslint-plugin-n",
  "ts-node",
  "nodemon",
  "eslint",
  "@typescript-eslint/parser",
  "@typescript-eslint/eslint-plugin",
  "eslint-config-prettier",
  "eslint-plugin-prettier",
  "prettier",
  "typescript",
  "typescript-eslint",
];

export default function getDependencies(framework: Framework) {
  if (!framework) {
    throw new Error("Framework is not defined!");
  }

  const frameworkDependenciesObject = {
    [Framework.Express]: {
      dependencies: ["express", "body-parser", "cors"],
      devDependencies: [
        "@types/express",
        "@types/body-parser",
        "@types/cors",
        "@types/jest",
      ],
    },
    [Framework.Koa]: {
      dependencies: ["koa", "koa-router", "koa-bodyparser", "@koa/cors"],
      devDependencies: [
        "@types/koa",
        "@types/koa-router",
        "@types/koa-bodyparser",
        "@types/koa-cors",
      ],
    },
  };

  const frameworkDependencies = frameworkDependenciesObject[framework];

  if (!frameworkDependencies) {
    throw new Error(`Framework ${framework} does not supported!`);
  }

  return {
    dependencies: [
      ...commonDevDependencies,
      ...frameworkDependencies.dependencies,
    ],
    devDependencies: [
      ...commonDevDependencies,
      ...frameworkDependencies.devDependencies,
    ],
  };
}
