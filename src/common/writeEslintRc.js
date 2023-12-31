const writeFile = require("./writeFile");

module.exports = function (basePath) {
  return writeFile(
    {
      env: {
        es6: true,
        node: true,
        mocha: true,
        jest: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
      },
      plugins: ["prettier", "@typescript-eslint"],
      rules: {
        "no-undef": 2,
        "no-unused-vars": "off",
        "no-useless-escape": 0,
        "prettier/prettier": "error",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: false,
          },
        ],
      },
    },
    basePath,
    "eslintrc.json",
  );
};
