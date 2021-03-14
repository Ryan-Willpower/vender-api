import { Router } from "express";

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

router.get("/", getProductsHandler);

router.post("/", addProductRequestSchema, addProductHandler);

router.patch("/:product_id", editProductRequestSchema, editProductHandler);

router.delete("/:product_id", deleteProductRequestSchema, deleteProductHandler);

export default router;
