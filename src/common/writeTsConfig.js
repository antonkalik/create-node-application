const writeFile = require("./writeFile");

module.exports = function (basePath) {
  return writeFile(
    {
      compilerOptions: {
        outDir: "./dist",
        sourceMap: true,
        rootDir: ".",
        noImplicitAny: false,
        module: "commonjs",
        target: "es6",
        moduleResolution: "node",
        esModuleInterop: true,
        strict: true,
        typeRoots: ["node_modules/@types", "src/@types"],
        useUnknownInCatchVariables: false,
        skipLibCheck: true,
        baseUrl: "./",
        paths: {
          "src/*": ["src/*"],
        },
        types: ["node", "jest"],
      },
      include: ["src/**/*"],
      exclude: ["node_modules", "**/*.spec.ts"],
    },
    basePath,
    "tsconfig.json",
  );
};
