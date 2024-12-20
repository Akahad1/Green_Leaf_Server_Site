import express from "express";
import { notificationController } from "./notification.controller";
const router = express.Router();

// Route to get notifications for a user
router.get("/:userId", notificationController.getNotifications);

export const NotificationRouter = router;
