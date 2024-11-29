import express, { Application, Request, Response } from "express";
import cors from "cors";

import router from "./app/router/router";
import { globalErrorHandler } from "./app/middleware/globalErrorhandler";

const app: Application = express();

// Middleware to parse JSON and handle CORS
app.use(express.json());
app.use(
  cors({ origin: ["https://green-leaf-theta.vercel.app"], credentials: true })
);

// Basic test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Main API routes
app.use("/api/a6", router);

app.use(globalErrorHandler);
// Catch-all for 404 errors

export default app;
