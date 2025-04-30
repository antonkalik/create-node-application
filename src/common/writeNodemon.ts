import writeFile from "./writeFile";

export default function (basePath: string) {
  const nodemonConfig = {
    watch: ["src/"],
  };

  return writeFile<typeof nodemonConfig>(
    nodemonConfig,
    basePath,
    "nodemon.json",
  );
}
