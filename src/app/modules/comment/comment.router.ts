import express from "express";
import { commentController } from "./comment.controller";

const router = express.Router();

router.post(
  "/createComment",
  // validateRequest(UserValidation.userValidationSchema),

  commentController.createComment
);

router.get("/:id", commentController.getComment);

router.put("/:id", commentController.updateSpacificComment);
router.delete("/:id", commentController.deleteSpacificComment);
export const commentRouter = router;
