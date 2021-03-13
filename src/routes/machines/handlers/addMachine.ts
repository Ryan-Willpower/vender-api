import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { machineModel } from "../../../models/machine";
import { filterOnlyUseKeyAndValue } from "../../../utils/filterRequest";
import { logError } from "../../../utils/logger";
import { getRandomNumber } from "../../../utils/randomNumber";

const addMachineHandler = async (req: Request, res: Response) => {
  try {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ status: "error", error: error.array() });
    }

    const requiredKey = ["address", "postal_code"];

    const doc = filterOnlyUseKeyAndValue<{
      address: string;
      postal_code: string;
    }>(req.body, requiredKey);

    await machineModel.create({
      ...doc,
      vendor_code: getRandomNumber(1, 100000),
    });

    return res.json({ status: "ok" });
  } catch (error) {
    logError(error);

    return res.status(500).json({ status: "not ok" });
  }
};

export default addMachineHandler;
