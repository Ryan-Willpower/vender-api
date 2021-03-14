import { checkSchema } from "express-validator";

const editUserRequestSchema = checkSchema({
  username: {
    in: ["body", "params"],
    isString: true,
    trim: true,
    escape: true,
  },
  fullname: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    optional: true,
  },
});

export default editUserRequestSchema;
