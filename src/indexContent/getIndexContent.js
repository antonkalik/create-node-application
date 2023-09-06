const expressContent = require("./expressContent");
const koaContent = require("./koaContent");

const frameworksContent = {
  express: expressContent,
  koa: koaContent,
};

function getIndexContent(framework) {
  if (!framework) {
    throw new Error("Should provide framework");
  }

  const content = frameworksContent[framework];

  if (!content) {
    throw new Error(`Framework ${framework} is not supported`);
  }

  return content;
}

module.exports = getIndexContent;
