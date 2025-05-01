import log from "./log";

export default function (appName: string): void {
  log.dim("\n--------------------------------------------------\n");
  log.dim("Run 'cd", appName, "' to enter the application folder.");
  log.dim("Run 'npm run build' to build the application.");
  log.dim("Run 'npm run dev' to start the application.");
}
