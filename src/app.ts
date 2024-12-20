import express, { Application, Request, Response } from "express";
import cors from "cors";
import http from "http";
import router from "./app/router/router";
import { globalErrorHandler } from "./app/middleware/globalErrorhandler";
import { initSocket } from "./app/middleware/socket";

const app: Application = express();
const server = http.createServer(app);
// Middleware to parse JSON and handle CORS
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

// Basic test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Main API routes
app.use("/api/a6", router);

app.use(globalErrorHandler);
initSocket(server);
export default app;
