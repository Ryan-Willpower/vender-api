import { checkSchema } from "express-validator";

const addProductRequestSchema = checkSchema({
  vendor_id: {
    in: "query",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: true,
  },
  name: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: true,
  },
  quantity: {
    in: "body",
    isNumeric: true,
    trim: true,
    escape: true,
    notEmpty: true,
  },
  photo: {
    in: "body",
    trim: true,
    optional: true,
  },
});

export default addProductRequestSchema;
