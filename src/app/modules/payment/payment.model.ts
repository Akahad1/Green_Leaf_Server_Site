import { model, Schema } from "mongoose";
import { TPayment } from "./payment.interface";

const paymentSchma = new Schema<TPayment>({
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  price: {
    type: String,
  },
  email: {
    type: String,
  },
  transactionId: {
    type: String,
  },
  orderId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Payment = model<TPayment>("Payment", paymentSchma);
