import httpStatus from "http-status";
import { sendResponse } from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { paymentServices } from "./payment.service";

const createPament = catchAsync(async (req, res) => {
  const price = req.body;
  const result = await paymentServices.PaymentFromDB(price);

  res.json({
    result,
  });
});
const getPayment = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await paymentServices.getPaymentFromDB(data);

  res.json({
    result,
  });
});

export const paymnetController = {
  createPament,
  getPayment,
};
