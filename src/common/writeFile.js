const fs = require("fs").promises;
const path = require("path");

async function writeFile(content = {}, basePath, name) {
  let dataToWrite;

  if (typeof content === "string") {
    dataToWrite = content;
  } else {
    try {
      dataToWrite = JSON.stringify(content, null, 2);
    } catch (err) {
      throw new Error("Provided content cannot be stringified to JSON.");
    }
  }

  await fs.writeFile(path.join(basePath, name), dataToWrite);
}

module.exports = writeFile;
