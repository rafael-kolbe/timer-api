import { timer } from "../classes/timer.js";

export const checkTimer = (req, res) => {
  const [minutes, seconds] = timer.getTime();
  return res.send({ timer: `${minutes}:${seconds}` });
};

export const startTimer = (req, res) => {
  timer.start();
  return res.send({ message: "Clock started!" });
};

export const stopTimer = (req, res) => {
  timer.stop();
  return res.send({ message: "Clock stopped!" });
};

export const resumeTimer = (req, res) => {
  timer.resume();
  return res.send({ message: "Clock resumed!" });
};

export const resetTimer = (req, res) => {
  timer.reset();
  return res.send({ message: "Clock resetted!" });
};
