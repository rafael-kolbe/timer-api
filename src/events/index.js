import readline from "readline";
import { timer } from "../classes/timer.js";

const updateServerTimer = ([minutes, seconds]) => {
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(`Server timer: ${minutes}:${seconds}`);
};

export const handleServerEvents = () => {
  timer.on("tick", updateServerTimer);
  timer.on("reset", updateServerTimer);
};
