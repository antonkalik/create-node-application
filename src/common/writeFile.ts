import { promises as fs } from "node:fs";
import path from "node:path";

async function writeFile<T>(content: T, basePath: string, name: string) {
  let dataToWrite;
  const isContentString = typeof content === "string";

  if (isContentString) {
    dataToWrite = content;
  } else {
    try {
      dataToWrite = JSON.stringify(content, null, 2);
    } catch {
      throw new Error("Provided content cannot be stringified to JSON.");
    }
  }

  await fs.writeFile(path.join(basePath, name), dataToWrite);
}

export default writeFile;
