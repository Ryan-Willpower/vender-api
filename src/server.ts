import express from "express";
import cors from "cors";

import healthCheckRouter from "./routes/healthcheck";
import { requestLoggingMiddleware } from "./utils/middleware";

export function initialServer() {
  const app = express();

  app.use(cors());

  app.use(requestLoggingMiddleware());

  app.use("/", healthCheckRouter);

  return app;
}
