const welcomeMessage = () => {
  console.log("\x1b[34m%s\x1b[0m", "#######################################");
  console.log("\x1b[34m%s\x1b[0m", "#                                     #");
  console.log("\x1b[34;1m%s\x1b[0m", "#    Welcome to Create Node App!      #");
  console.log("\x1b[34m%s\x1b[0m", "#                                     #");
  console.log("\x1b[34m%s\x1b[0m", "#######################################");
  console.log("\x1b[34m%s\x1b[0m", "#                                     #");
  console.log("\x1b[34;1m%s\x1b[0m", "#      Anton Kalik / idedy.com        #");
  console.log("\x1b[34m%s\x1b[0m", "#                                     #");
  console.log("\x1b[34m%s\x1b[0m", "#######################################");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

module.exports = welcomeMessage;
