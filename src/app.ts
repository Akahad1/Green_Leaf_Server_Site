import express, { Application, Request, Response } from "express";

import cors from "cors";
import globalErrorHandler from "./app/middleware/globalErrorhandler";

import router from "./app/router/router";
import notFound from "./app/middleware/notFound";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/a6", router);

// app.use(globalErrorHandler);
// app.use(notFound);
export default app;
