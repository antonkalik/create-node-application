const writeFile = require("./writeFile");

module.exports = function (basePath) {
  return writeFile(
    {
      rules: {
        "no-unreachable": true,
      },
    },
    basePath,
    "tslint.json",
  );
};
