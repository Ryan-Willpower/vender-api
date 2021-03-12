import { Schema, model } from "mongoose";

import { User } from "../types/model";

const userSchema = new Schema({
  fullname: Schema.Types.String,
  username: Schema.Types.String,
});

export const userModel = model<User>("user", userSchema);
