import { Request, Response, NextFunction } from "express";

import { logger } from "./logger";

export function requestLoggingMiddleware() {
  return (req: Request, _res: Response, next: NextFunction) => {
    const params =
      Object.keys(req.params).length > 0 ? JSON.stringify(req.params) : "none";

    const body = req.body ? JSON.stringify(req.body) : "none";

    logger.info(
      `>>> [API]: ${req.method.toUpperCase()} ${
        req.path
      } | [PARAM]: ${params} | [BODY]: ${body} >>>`
    );

    next();
  };
}
