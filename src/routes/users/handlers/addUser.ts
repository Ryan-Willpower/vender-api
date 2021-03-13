import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { userModel } from "../../../models/user";
import { filterOnlyUseKeyAndValue } from "../../../utils/filterRequest";
import { logError } from "../../../utils/logger";

const addUserHandler = async (req: Request, res: Response) => {
  try {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ status: "error", error: error.array() });
    }

    const requiredKey = ["username", "fullname"];

    const doc = filterOnlyUseKeyAndValue<{
      username: string;
      fullname: string;
    }>(req.body, requiredKey);

    await userModel.create(doc);

    return res.json({ status: "ok" });
  } catch (error) {
    logError(error);

    return res.status(500).json({ status: "not ok" });
  }
};

export default addUserHandler;
