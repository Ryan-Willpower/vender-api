import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { userModel } from "../../../models/user";
import { logError } from "../../../utils/logger";

const getUserHandler = async (req: Request, res: Response) => {
  try {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ status: "error", error: error.array() });
    }

    const response = await userModel.findOne({
      username: req.params?.username,
    });

    if (!response) {
      return res.status(404).json({ status: "not found" });
    }

    return res.json({
      status: "ok",
      user: { username: response.username, fullname: response.fullname },
    });
  } catch (error) {
    logError(error);

    return res.status(500).json({ status: "not ok" });
  }
};

export default getUserHandler;
