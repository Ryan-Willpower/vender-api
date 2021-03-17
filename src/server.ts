import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";

import healthCheckRouter from "./routes/healthcheck";
import userRouter from "./routes/users";
import machineRouter from "./routes/machines";
import productRouter from "./routes/products";
import { requestLoggingMiddleware } from "./utils/middleware";

export function initialServer() {
  const app = express();

  app.use(cors());
  app.use(json());
  app.use(
    urlencoded({
      limit: "200mb",
      extended: true,
    })
  );

  app.use(requestLoggingMiddleware());

  app.use("/", healthCheckRouter);
  app.use("/user", userRouter);
  app.use("/machine", machineRouter);
  app.use("/product", productRouter);

  return app;
}
