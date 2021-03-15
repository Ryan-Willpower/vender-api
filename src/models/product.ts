import { Schema, model } from "mongoose";

import { Product } from "../types/model";

const productSchema = new Schema({
  machine_id: { type: Schema.Types.ObjectId, required: true },
  name: { type: Schema.Types.String, required: true },
  quantity: { type: Schema.Types.Number, required: true },
  photo: { type: Schema.Types.Buffer },
});

export const productModel = model<Product>("product", productSchema);
