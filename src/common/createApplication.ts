import path from "node:path";
import fs from "node:fs";
import log from "../functions/log";
import { exec } from "node:child_process";
import { promisify } from "util";
import showProgress from "../functions/showProgress";
import showFinalMessage from "../functions/showFinalMessage";
import showContactMessage from "../functions/showContactMessage";
import executeCommand from "../functions/executeCommand";
import writeFiles from "./writeFiles";
import getIndexContent from "../indexContent/getIndexContent";
import getDependencies from "../functions/getDependencies";
import { Framework } from "../types";

const asyncExec = promisify(exec);

export default async function createApplication(
  appName: string,
  framework: Framework,
) {
  const basePath = path.join(process.cwd(), appName);

  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath, { recursive: true });
    fs.mkdirSync(path.join(basePath, "src"));
  } else {
    log.error(`Folder ${appName} already exists!`);
    return;
  }

  await asyncExec("npm init -y", { cwd: basePath });

  const installDependenciesProgress = showProgress("• Installing dependencies");
  const { dependencies, devDependencies } = getDependencies(framework);

  executeCommand(
    `npm i ${dependencies.join(" ")}`,
    basePath,
    () => {},
    () => {
      clearInterval(installDependenciesProgress);
      log.success("Done!");

      const installDevDependenciesProgress = showProgress(
        "• Installing devDependencies",
      );

      executeCommand(
        `npm install -D ${devDependencies.join(" ")}`,
        basePath,
        () => {},
        () => {
          clearInterval(installDevDependenciesProgress);
          log.success("Done!");

          const writeFilesProgress = showProgress("• Writing files");

          writeFiles(basePath)
            .then(() => {
              clearInterval(writeFilesProgress);
            })
            .then(() => {
              const indexContent = getIndexContent(framework);
              fs.writeFileSync(
                path.join(basePath, "src", "index.ts"),
                indexContent.trim(),
              );

              showFinalMessage(appName);
              showContactMessage();
            });
        },
      );
    },
  );
}
