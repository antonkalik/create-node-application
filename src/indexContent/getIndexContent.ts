import expressContent from "./expressContent";
import koaContent from "./koaContent";
import { Framework } from "../types";

const frameworksContent = {
  [Framework.Express]: expressContent,
  [Framework.Koa]: koaContent,
};

export default function getIndexContent(framework: Framework) {
  if (!framework) {
    throw new Error("Should provide framework");
  }

  const content = frameworksContent[framework];

  if (!content) {
    throw new Error(`Framework ${framework} is not supported`);
  }

  return content;
}
