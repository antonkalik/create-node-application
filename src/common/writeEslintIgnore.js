const writeFile = require("./writeFile");

module.exports = (basePath) =>
  writeFile("node_modules/*", basePath, ".eslintignore");
