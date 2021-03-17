import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { machineModel } from "../../../models/machine";
import { logError } from "../../../utils/logger";

const getMachineHandler = async (req: Request, res: Response) => {
  try {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ status: "error", error: error.array() });
    }

    const response = await machineModel.findOne({
      vendor_code: req.params?.vendor_code,
    });

    if (!response) {
      return res.status(404).json({ status: "not found" });
    }

    return res.json({
      status: "ok",
      machine: {
        vendor_code: response.vendor_code,
        address: response.address,
        postal_code: response.postal_code,
      },
    });
  } catch (error) {
    logError(error);

    return res.status(500).json({ status: "not ok" });
  }
};

export default getMachineHandler;
