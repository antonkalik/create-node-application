const commonDevDependencies = [
  "typescript",
  "@types/node",
  "esbuild",
  "ts-node",
  "nodemon",
  'eslint',
  '@typescript-eslint/parser',
  '@typescript-eslint/eslint-plugin',
  "eslint-config-prettier",
  "eslint-plugin-prettier",
  'prettier',
];

function getDependencies(framework) {
  if (!framework) {
    throw new Error("Framework is not defined!");
  }

  const frameworkDependenciesObject = {
    express: {
      dependencies: ["express", "body-parser", "cors"],
      devDependencies: ["@types/express", "@types/body-parser", "@types/cors"],
    },
    koa: {
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
    throw new Error("Framework is not valid!");
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

module.exports = getDependencies;
