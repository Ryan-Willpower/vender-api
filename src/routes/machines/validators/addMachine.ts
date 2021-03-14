import { checkSchema } from "express-validator";

const addMachineRequestSchema = checkSchema({
  address: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: true,
  },
  postal_code: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: true,
  },
});

export default addMachineRequestSchema;
