import log from "../functions/log";
import writeEslintRc from "./writeEslintRc";
import writeGitignore from "./writeGitignore";
import writeJestConfig from "./writeJestConfig";
import writeNodemon from "./writeNodemon";
import writeNvmRc from "./writeNvmRc";
import writePrettierRc from "./writePrettierRc";
import writePrettierIgnore from "./writePrettierIgnore";
import writeTsConfig from "./writeTsConfig";
import writeTsLint from "./writeTsLint";
import writeScripts from "./writeScripts";

export default async (basePath: string) => {
  try {
    await Promise.all(
      [
        writeScripts,
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
  } catch {
    log.error("Error writing files");
  }
};
