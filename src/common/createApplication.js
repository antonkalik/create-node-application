const path = require("path");
const fs = require("fs");
const log = require("../functions/log");
const { execSync } = require("child_process");
const showProgress = require("../functions/showProgress");
const showFinalMessage = require("../functions/showFinalMessage");
const showContactMessage = require("../functions/showContactMessage");
const executeCommand = require("../functions/executeCommand");
const writeFiles = require("./writeFiles");
const getIndexContent = require("../indexContent/getIndexContent");
const getDependencies = require("../functions/getDependencies");

function createApplication(appName, framework) {
  const basePath = path.join(process.cwd(), appName);

  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath, { recursive: true });
    fs.mkdirSync(path.join(basePath, "src"));
  } else {
    log.error(`Folder ${appName} already exists!`);
    return;
  }

  execSync("npm init -y", { cwd: basePath });

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

module.exports = createApplication;
