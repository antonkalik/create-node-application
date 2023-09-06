const log = require("./log");

module.exports = function (appName) {
  log.dim("\n--------------------------------------------------\n");
  log.dim("Run 'cd", appName, "' to enter the application folder.");
  log.dim("Run 'npm run build' to build the application.");
  log.dim("Run 'npm run dev' to start the application.");
};
