import writeFile from "./writeFile";

export default (basePath: string) =>
  writeFile<string>("v22", basePath, ".nvmrc");
