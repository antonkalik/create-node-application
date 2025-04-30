#!/usr/bin/env node

import showWelcomeMessage from "./functions/showWelcomeMessage";
import argsToObject from "./functions/argsToObject";
import createApplication from "./common/createApplication";
import log from "./functions/log";
import { Framework } from "./types";

const [appName, ...args] = process.argv.slice(2);
if (!appName) {
  log.error("No application name specified!");
  process.exit(1);
}

const argsObject = argsToObject(args);
const framework = (argsObject["framework"] ||
  argsObject["fw"] ||
  Framework.Express) as Framework;

showWelcomeMessage().then(async () => {
  log.text("\nCreating", framework, "application started!\n");

  await createApplication(appName, framework);
});
