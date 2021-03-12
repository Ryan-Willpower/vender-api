import { Schema, model } from "mongoose";

import { Machine } from "../types/model";

const machineSchema = new Schema({
  address: Schema.Types.String,
  postal_code: Schema.Types.String,
  vendor_code: Schema.Types.String,
});

export const machineModel = model<Machine>("machine", machineSchema);
