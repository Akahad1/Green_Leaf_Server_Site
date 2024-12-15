import express from "express";
import { groupController } from "./group.controller";
const router = express.Router();
router.post("/create-group", groupController.createGroup);
router.post("/invite/:id", groupController.groupsInvite);
router.post("/:groupId/invite/:requestId", groupController.memberApproval);

export const groupRouter = router;
