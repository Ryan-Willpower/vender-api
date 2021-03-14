import { Schema, model } from "mongoose";

import { Machine } from "../types/model";

const machineSchema = new Schema({
  address: { type: Schema.Types.String, required: true },
  postal_code: { type: Schema.Types.String, required: true },
  vendor_code: { type: Schema.Types.String, required: true },
});

export const machineModel = model<Machine>("machine", machineSchema);
