const showWelcomeMessage = () => {
  console.log("\x1b[34m%s\x1b[0m", "#######################################");
  console.log("\x1b[34m%s\x1b[0m", "#                                     #");
  console.log(
    "\x1b[34m%s\x1b[36;1m%s\x1b[34m%s\x1b[0m",
    "#       ",
    "Create Node Application!",
    "      #",
  );
  console.log("\x1b[34m%s\x1b[0m", "#                                     #");
  console.log("\x1b[34m%s\x1b[0m", "#######################################");
  console.log("\x1b[34m%s\x1b[0m", "#                                     #");
  console.log(
    "\x1b[34m%s\x1b[36;1m%s\x1b[34m%s\x1b[0m",
    "#      ",
    "Anton Kalik Development",
    "        #",
  );
  console.log("\x1b[34m%s\x1b[0m", "#                                     #");
  console.log("\x1b[34m%s\x1b[0m", "#######################################");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

module.exports = showWelcomeMessage;
