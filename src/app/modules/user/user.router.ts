import express from "express";
import { userController } from "./user.controller";

import { UserValidation } from "./user.validation";
import { multerUpload } from "../../config/multer.config";
import { USER_ROLE } from "./user.constent";
import auth from "../../middleware/auth";
const router = express.Router();

router.post(
  "/auth/signup",
  // validateRequest(UserValidation.userValidationSchema),

  userController.createUser
);
router.post("/auth/login", userController.loginUser);
router.get("/user", userController.getUser);
router.get("/user/:id", userController.getSpacificUser);
router.put(
  "/user/:id",
  multerUpload.single("image"),
  userController.updateSpacificUser
);
router.put(
  "/user/cover/:id",
  multerUpload.single("cover"),
  userController.updateCoverPhoto
);
router.put(
  "/user/image/:id",
  multerUpload.single("image"),
  userController.updateImage
);
export const userRoute = router;
