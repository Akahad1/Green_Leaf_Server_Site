import express from "express";

import validateRequest from "../../middleware/validationRequest";

import { multerUpload } from "../../config/multer.config";
import { postController } from "./post.controller";
const router = express.Router();

router.post(
  "/createPost",
  // validateRequest(UserValidation.userValidationSchema),
  //   multerUpload.single("image"),
  postController.createPost
);
// router.post("/auth/login", userController.loginUser);
router.get("/", postController.getPost);
router.get("/:id", postController.getSpacificPost);
router.put("/:id", postController.updateSpacificPost);
export const postRouter = router;
