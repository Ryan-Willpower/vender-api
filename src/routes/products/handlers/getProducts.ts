import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { machineModel } from "../../../models/machine";
import { productModel } from "../../../models/product";
import { logError } from "../../../utils/logger";

const getProductsHandler = async (req: Request, res: Response) => {
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

    const products = await productModel.find({ machine_id: machine._id });

    return res.status(products.length > 0 ? 200 : 404).json({
      status: "ok",
      products,
    });
  } catch (error) {
    logError(error);

    return res.status(500).json({ status: "not ok" });
  }
};

export default getProductsHandler;
