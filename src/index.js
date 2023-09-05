#!/usr/bin/env node

const welcomeMessage = require("./functions/welcomeMessage.js");
const argsToObject = require("./functions/argsToObject.js");
const createExpressApp = require("./frameworksFunctions/createExpressApp.js");
const createKoaApp = require("./frameworksFunctions/createKoaApp.js");
const log = require("./functions/log.js");

const frameworkFunctions = {
  express: createExpressApp,
  koa: createKoaApp,
};

const [appName, ...args] = process.argv.slice(2);
const argsObject = argsToObject(args);
const framework = argsObject.framework || argsObject.fw;

if (!framework) {
  log.error("No framework specified!");
  process.exit(1);
}

const setupFunction = frameworkFunctions[framework];

welcomeMessage().then(() => {
  if (setupFunction) {
    setupFunction(appName);
  } else {
    log.error("Unsupported framework or no framework specified.");
  }
})


