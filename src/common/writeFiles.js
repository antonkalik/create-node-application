const log = require("../functions/log");
const writeEslintIgnore = require("./writeEslintIgnore");
const writeEslintRc = require("./writeEslintRc");
const writeGitignore = require("./writeGitignore");
const writeJestConfig = require("./writeJestConfig");
const writeNodemon = require("./writeNodemon");
const writeNvmRc = require("./writeNvmRc");
const writePrettierRc = require("./writePrettierRc");
const writePrettierIgnore = require("./writePrettierIgnore");
const writeTsConfig = require("./writeTsConfig");
const writeTsLint = require("./writeTsLint");
const writeScripts = require("./writeScripts");

module.exports = async (basePath) => {
  try {
    await Promise.all(
      [
        writeScripts,
        writeEslintIgnore,
        writeEslintRc,
        writeGitignore,
        writeJestConfig,
        writeNodemon,
        writeNvmRc,
        writePrettierRc,
        writePrettierIgnore,
        writeTsConfig,
        writeTsLint,
      ].map((func) => func(basePath)),
    );

    log.success("Done!");
  } catch (error) {
    log.error("Error writing files:", error);
  }
};
