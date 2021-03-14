import { Request, Response } from "express";

import { userModel } from "../../../models/user";
import { logError } from "../../../utils/logger";

const getUserHandler = async (_req: Request, res: Response) => {
  try {
    const response = await userModel.find();

    return res.status(response.length > 0 ? 200 : 404).json({
      status: "ok",
      user: response.map((item) => ({
        username: item.username,
        fullname: item.fullname,
      })),
    });
  } catch (error) {
    logError(error);

    return res.status(500).json({ status: "not ok" });
  }
};

export default getUserHandler;
