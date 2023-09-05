const { exec } = require("child_process");

function executeCommand(command, cwd, onProgress, onComplete) {
  const child = exec(command, { cwd });

  child.stdout.on("data", (data) => {
    onProgress(data);
  });

  child.stderr.on("data", (data) => {
    onProgress(data);
  });

  child.on("exit", onComplete);
}

module.exports = executeCommand;
