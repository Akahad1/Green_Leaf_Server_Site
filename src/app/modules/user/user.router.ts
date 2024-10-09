import express from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middleware/validationRequest";
import { UserValidation } from "./user.validation";
import { multerUpload } from "../../config/multer.config";
const router = express.Router();

router.post(
  "/auth/signup",
  // validateRequest(UserValidation.userValidationSchema),
  multerUpload.single("image"),
  userController.createUser
);
router.post("/auth/login", userController.loginUser);
router.get("/user", userController.getUser);
export const userRoute = router;
