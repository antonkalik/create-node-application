import writeFile from "./writeFile";

export default function (basePath: string) {
  const tsConfig = {
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
  };
  return writeFile<typeof tsConfig>(tsConfig, basePath, "tsconfig.json");
}
