import express from "express";
import { paymnetController } from "./payment.controller";

const router = express.Router();

router.post("/createPament", paymnetController.createPament);
router.post("/", paymnetController.getPayment);

export const paymentRoute = router;
