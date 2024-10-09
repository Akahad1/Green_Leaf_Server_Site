import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middleware/globalErrorhandler";
import cors from "cors";

import router from "./app/router/router";
import notFound from "./app/middleware/notFound";

const app: Application = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/a6", router);

// app.use(globalErrorHandler);
// app.use(notFound);
export default app;
