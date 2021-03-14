import { Schema, model } from "mongoose";

import { User } from "../types/model";

const userSchema = new Schema({
  fullname: { type: Schema.Types.String, required: true },
  username: { type: Schema.Types.String, required: true },
});

export const userModel = model<User>("user", userSchema);
