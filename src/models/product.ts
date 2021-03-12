import { Schema, model } from "mongoose";

import { Product } from "../types/model";

const productSchema = new Schema({
  machine_id: Schema.Types.ObjectId,
  name: Schema.Types.String,
  quantity: Schema.Types.Number,
});

export const productModel = model<Product>("product", productSchema);
