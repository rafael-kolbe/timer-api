import express from "express";
import routes from "./src/routes.js";
import { handleServerEvents } from "./src/events/index.js";

const app = express();
app.use(express.json());
app.use(routes);
handleServerEvents();

app.listen(5000, () => console.log("Server Initialized"));
