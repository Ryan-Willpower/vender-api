import express from "express";
import cors from "cors";

import healthCheckRouter from "./routes/healthcheck";
import { requestLoggingMiddleware } from "./utils/middleware";
import { connectToMongo } from "./utils/mongoose";

export function initialServer() {
  const app = express();

  app.use(cors());

  app.use(requestLoggingMiddleware());

  connectToMongo();

  app.use("/", healthCheckRouter);

  return app;
}
