import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { machineModel } from "../../../models/machine";
import { productModel } from "../../../models/product";
import { filterOnlyUseKeyAndValue } from "../../../utils/filterRequest";
import { logError } from "../../../utils/logger";

const addProductHandler = async (req: Request, res: Response) => {
  try {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ status: "error", error: error.array() });
    }

    const machine = await machineModel.findOne({
      vendor_code: req.query.vendor_id as string,
    });

    if (!machine) {
      return res.status(404).json({ status: "not found" });
    }

    const requiredKey = ["name", "quantity", "photo"];

    const doc = filterOnlyUseKeyAndValue<{
      name: string;
      quantity: number;
      photo?: string;
    }>(req.body, requiredKey);

    await productModel.create({
      ...doc,
      machine_id: machine._id,
    });

    return res.json({ status: "ok" });
  } catch (error) {
    logError(error);

    return res.status(500).json({ status: "not ok" });
  }
};

export default addProductHandler;
