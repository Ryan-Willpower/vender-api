import { Request, Response } from "express";

import { machineModel } from "../../../models/machine";
import { logError } from "../../../utils/logger";

const getMachinesHandler = async (_req: Request, res: Response) => {
  try {
    const machines = await machineModel.find();

    return res.status(machines.length > 0 ? 200 : 404).json({
      status: "ok",
      machines,
    });
  } catch (error) {
    logError(error);

    return res.status(500).json({ status: "not ok" });
  }
};

export default getMachinesHandler;
