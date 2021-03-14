import { checkSchema } from "express-validator";

const deleteUserRequestSchema = checkSchema({
  username: {
    in: "params",
    isString: true,
    trim: true,
    escape: true,
  },
});

export default deleteUserRequestSchema;
