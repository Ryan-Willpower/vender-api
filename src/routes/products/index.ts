import { Router } from "express";
import multer from "multer";

import {
  addProductHandler,
  deleteProductHandler,
  editProductHandler,
  getProductsHandler,
} from "./handlers";
import {
  addProductRequestSchema,
  deleteProductRequestSchema,
  editProductRequestSchema,
} from "./validators";

const router = Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 104857600 },
});

router.get("/", getProductsHandler);

router.post(
  "/",
  addProductRequestSchema,
  upload.single("photo"),
  addProductHandler
);

router.patch(
  "/:product_id",
  upload.single("photo"),
  editProductRequestSchema,
  editProductHandler
);

router.delete("/:product_id", deleteProductRequestSchema, deleteProductHandler);

export default router;
