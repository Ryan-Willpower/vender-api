import { Router } from "express";

import {
  addMachineHandler,
  deleteMachineHandler,
  editMachineHandler,
  getMachineHandler,
  getMachinesHandler,
} from "./handlers";
import {
  addMachineRequestSchema,
  deleteMachineRequestSchema,
  editMachineRequestSchema,
  getOneMachineValidator,
} from "./validators";

const router = Router();

router.get("/", getMachinesHandler);

router.get("/:vendor_code", getOneMachineValidator, getMachineHandler);

router.post("/", addMachineRequestSchema, addMachineHandler);

router.patch("/:vendor_code", editMachineRequestSchema, editMachineHandler);

router.delete(
  "/:vendor_code",
  deleteMachineRequestSchema,
  deleteMachineHandler
);

export default router;
