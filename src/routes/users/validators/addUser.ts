import { checkSchema } from "express-validator";

const addUserRequestSchema = checkSchema({
  username: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: true,
  },
  fullname: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: true,
  },
});

export default addUserRequestSchema;
