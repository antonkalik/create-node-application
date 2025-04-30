import writeFile from "./writeFile";

export default function (basePath: string) {
  const jestConfig = {
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
  };

  return writeFile<typeof jestConfig>(jestConfig, basePath, "jest.config.json");
}
