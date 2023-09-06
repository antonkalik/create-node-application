const writeFile = require("./writeFile");

module.exports = function (basePath) {
  return writeFile(
    {
      watch: ["src/"],
    },
    basePath,
    "nodemon.json",
  );
};
