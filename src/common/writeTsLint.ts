import writeFile from "./writeFile";

export default function (basePath: string) {
  const tsLint = {
    rules: {
      "no-unreachable": true,
    },
  };
  return writeFile<typeof tsLint>(tsLint, basePath, "tslint.json");
}
