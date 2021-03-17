import { checkSchema } from "express-validator";

const purchaseRequestSchema = checkSchema({
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
});

export default purchaseRequestSchema;
