import { Document } from "mongoose";

export interface Product extends Document {
  machine_id: object;
  name: string;
  quantity: number;
  photo?: string;
}

export interface Machine extends Document {
  address: string;
  postal_code: string;
  vendor_code: string;
}

export interface User extends Document {
  fullname: string;
  username: string;
}
