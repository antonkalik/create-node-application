export default function argsToObject(args: string[]) {
  return args.reduce((acc: Record<string, string | number>, arg) => {
    const [key, value] = arg.replace(/^-+/, "").split("=");
    acc[key] = isNaN(Number(value)) ? value : Number(value);
    return acc;
  }, {});
}
