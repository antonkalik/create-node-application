const writeFile = require("./writeFile");

module.exports = function (basePath) {
  return writeFile(
    {
      singleQuote: true,
      trailingComma: "es5",
      printWidth: 100,
      arrowParens: "avoid",
      overrides: [
        {
          files: ".prettierrc",
          options: {
            parser: "json",
            jsxBracketSameLine: false,
          },
        },
      ],
    },
    basePath,
    ".prettierrc",
  );
};
