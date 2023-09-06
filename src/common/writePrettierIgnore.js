const writeFile = require("./writeFile");

module.exports = (basePath) =>
  writeFile(
    `**/*.md
**/*.svg
**/*.html
**/*.ejs`,
    basePath,
    ".prettierignore",
  );
