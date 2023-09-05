function argsToObject(args) {
  return args.reduce((acc, arg) => {
    const [key, value] = arg.replace(/^-+/, "").split("=");
    acc[key] = isNaN(value) ? value : Number(value);
    return acc;
  }, {});
}

module.exports = argsToObject;
