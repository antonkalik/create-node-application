#!/usr/bin/env node

const showWelcomeMessage = require("./functions/showWelcomeMessage.js");
const argsToObject = require("./functions/argsToObject.js");
const createApplication = require("./common/createApplication.js");
const log = require("./functions/log.js");

const [appName, ...args] = process.argv.slice(2);
if (!appName) {
  log.error("No application name specified!");
  process.exit(1);
}

const argsObject = argsToObject(args);
const framework = argsObject["framework"] || argsObject["fw"] || "express";

showWelcomeMessage().then(() => {
  log.text("\nCreating", framework, "application started!\n");

  createApplication(appName, framework);
});
