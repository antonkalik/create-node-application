import writeFile from "./writeFile";

export default (basePath: string) =>
  writeFile<string>(
    `**/*.md
**/*.svg
**/*.html
**/*.ejs`,
    basePath,
    ".prettierignore",
  );
