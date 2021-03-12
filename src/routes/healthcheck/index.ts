import { Router } from "express";

import { healthCheckHandler } from "./handlers/healthcheck";

const router = Router();

router.get("/healthcheck", healthCheckHandler);

export default router;
