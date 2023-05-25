import * as handlers from "./handlers/index.js";
import express from "express";

const routes = express();
const { checkTimer, startTimer, stopTimer, resumeTimer, resetTimer } = handlers;

routes.get("/", checkTimer);
routes.get("/start", startTimer);
routes.get("/stop", stopTimer);
routes.get("/resume", resumeTimer);
routes.get("/reset", resetTimer);

export default routes;
