import { Router } from "express";

import {
  addUserHandler,
  deleteUserHandler,
  editUserHandler,
  getUserHandler,
  getUsersHandler,
} from "./handlers";
import {
  addUserRequestSchema,
  deleteUserRequestSchema,
  editUserRequestSchema,
  getOneUserValidator,
} from "./validators";

const router = Router();

router.get("/", getUsersHandler);

router.get("/:username", getOneUserValidator, getUserHandler);

router.post("/", addUserRequestSchema, addUserHandler);

router.patch("/:username", editUserRequestSchema, editUserHandler);

router.delete("/:username", deleteUserRequestSchema, deleteUserHandler);

export default router;
