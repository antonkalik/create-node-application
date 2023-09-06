const writeFile = require("./writeFile");

module.exports = function (basePath) {
  return writeFile(
    {
      clearMocks: true,
      transform: {
        "^.+\\.ts?$": "ts-jest",
      },
      testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
      testPathIgnorePatterns: ["\\\\node_modules\\\\"],
      coverageDirectory: "coverage",
      verbose: true,
      testURL: "http://localhost/",
      testEnvironment: "node",
      modulePaths: ["./"],
      moduleNameMapper: {
        "/^src/(.*)$/": "<rootDir>/src/$1",
      },
    },
    basePath,
    "jest.config.json",
  );
};
