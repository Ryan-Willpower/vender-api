import { checkSchema } from "express-validator";

const deleteMachineRequestSchema = checkSchema({
  vendor_code: {
    in: "params",
    isString: true,
    trim: true,
    escape: true,
  },
});

export default deleteMachineRequestSchema;
