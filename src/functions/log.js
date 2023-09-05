const log = {
  text: (...messages) => {
    console.log(`\x1b[37m%s\x1b[0m`, messages.join(' '));  // Grey
  },
  warn: (...messages) => {
    console.log(`\x1b[33m%s\x1b[0m`, messages.join(' '));  // Yellow
  },
  error: (...messages) => {
    console.log(`\x1b[31;1m%s\x1b[0m`, messages.join(' '));  // Bold Red
  },
  success: (...messages) => {
    console.log(`\x1b[32;1m%s\x1b[0m`, messages.join(' '));  // Bold Green
  },
  brand: (...messages) => {
    console.log(`\x1b[34m%s\x1b[0m`, messages.join(' '));  // Blue
  }
};

module.exports = log;