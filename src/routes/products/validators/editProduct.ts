import { checkSchema } from "express-validator";

const editProductRequestSchema = checkSchema({
  product_id: {
    in: "params",
    isString: true,
    trim: true,
    escape: true,
  },
  vendor_id: {
    in: "query",
    isString: true,
    trim: true,
    escape: true,
  },
  name: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    optional: true,
  },
  quantity: {
    in: "body",
    isNumeric: true,
    trim: true,
    escape: true,
    optional: true,
  },
});

export default editProductRequestSchema;
