const log = {
  text: function (...messages) {
    console.log("\x1b[1m%s\x1b[0m", messages.join(" "));
  },
  error: (...messages) => {
    console.log(`\x1b[31;1m%s\x1b[0m`, messages.join(" "));
  },
  success: (...messages) => {
    console.log(`\x1b[32;1m%s\x1b[0m`, messages.join(" "));
  },
  dim: (...messages) => {
    console.log(`\x1b[2m%s\x1b[0m`, messages.join(" "));
  },
};

module.exports = log;
