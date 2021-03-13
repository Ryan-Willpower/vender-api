import { checkSchema } from "express-validator";

const getOneUserValidator = checkSchema({
  username: {
    in: "params",
    notEmpty: true,
    trim: true,
    escape: true,
  },
});

export default getOneUserValidator;
