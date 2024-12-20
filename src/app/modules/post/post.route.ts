import express from "express";

import validateRequest from "../../middleware/validationRequest";

import { multerUpload } from "../../config/multer.config";
import { postController } from "./post.controller";
const router = express.Router();

router.post(
  "/createPost",
  // validateRequest(UserValidation.userValidationSchema),
  multerUpload.single("image"),
  postController.createPost
);

router.get("/", postController.getPost);
router.get("/:id", postController.getSpacificPost);
router.get("/group-post/:groupId", postController.getGroupPost);
router.put("/:id", postController.updateSpacificPost);
router.delete("/:id", postController.deleteSpacificPost);
export const postRouter = router;
