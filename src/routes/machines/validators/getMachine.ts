import { checkSchema } from "express-validator";

const getOneMachineValidator = checkSchema({
  vendor_code: {
    in: "params",
    notEmpty: true,
    trim: true,
    escape: true,
  },
});

export default getOneMachineValidator;
