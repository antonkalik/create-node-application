import { exec } from "node:child_process";

export default function executeCommand(
  command: string,
  cwd: string,
  onProgress: () => void,
  onComplete: () => void,
) {
  const child = exec(command, { cwd });
  child.stdout?.on("data", onProgress);
  child.stderr?.on("data", onProgress);
  child.on("exit", onComplete);
}
