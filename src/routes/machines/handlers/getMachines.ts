import { Request, Response } from "express";

import { machineModel } from "../../../models/machine";
import { logError } from "../../../utils/logger";

const getMachineHandler = async (_req: Request, res: Response) => {
  try {
    const response = await machineModel.find();

    return res.status(response.length > 0 ? 200 : 404).json({
      status: "ok",
      machines: response.map((item) => ({
        address: item.address,
        postal_code: item.postal_code,
        vendor_code: item.vendor_code,
      })),
    });
  } catch (error) {
    logError(error);

    return res.status(500).json({ status: "not ok" });
  }
};

export default getMachineHandler;
