import { checkSchema } from "express-validator";

const editMachineRequestSchema = checkSchema({
  vendor_code: {
    in: ["params"],
    isString: true,
    trim: true,
    escape: true,
  },
  address: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    optional: true,
  },
  postal_code: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    optional: true,
  },
});

export default editMachineRequestSchema;
