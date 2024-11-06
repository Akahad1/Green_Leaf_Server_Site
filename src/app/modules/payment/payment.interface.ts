import { Types } from "mongoose";

export interface TPayment {
  user: Types.ObjectId[];
  price: string;
  email: string;
  transactionId: string;
  orderId: Types.ObjectId;
}
