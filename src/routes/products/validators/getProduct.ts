import { checkSchema } from "express-validator";

const getProductsValidator = checkSchema({
  vendor_id: {
    in: "query",
    isString: true,
    notEmpty: true,
    trim: true,
    escape: true,
  },
});

export default getProductsValidator;
