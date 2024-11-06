import Stripe from "stripe";
import { Payment } from "./payment.model";
import { TPayment } from "./payment.interface";
import { User } from "../user/user.model";

const PaymentFromDB = async (price: any) => {
  const stripe = new Stripe(process.env.PAYMENT_KEY as string);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "usd",

    payment_method_types: ["card"],
  });
  console.log({
    clientSecret: paymentIntent.client_secret,
  });
  return {
    clientSecret: paymentIntent.client_secret,
  };
};
const getPaymentFromDB = async (paymentData: TPayment) => {
  const result = await Payment.create(paymentData);
  const id = paymentData.orderId;
  const updateresult = await User.findByIdAndUpdate(id, { verified: true });
  return result;
};

export const paymentServices = {
  PaymentFromDB,
  getPaymentFromDB,
};
