import express from "express";
import { groupController } from "./group.controller";
const router = express.Router();
router.post("/create-group", groupController.createGroup);
router.get("/:id", groupController.getMyGroup);
router.get("/:userId/group/:groupId", groupController.getSpecificGroup);
router.put("/:userId/group/:groupId", groupController.updateSpecificGroup);
router.get("/not-involved/:id", groupController.getGroupsWhereNotInvolved);
router.post("/invite/:id", groupController.groupsInvite);
router.post("/:groupId/invite/:requestId", groupController.memberApproval);

export const groupRouter = router;
