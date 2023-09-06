const log = require("./log");

const showContactMessage = () => {
  log.dim("\n--------------------------------------------------\n");
  log.dim("Feel free to contact me:");
  log.text("github.com/antonkalik");
  log.text("twitter.com/idedycom");
  log.text("antonkalik@gmail.com");
  log.dim("\n--------------------------------------------------\n");
  log.dim("Happy coding!\n");
};

module.exports = showContactMessage;
