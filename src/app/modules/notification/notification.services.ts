import { INotification } from "./notification.interface";
import { Notification } from "./notification.model";

const createNotificationIntoDB = async (
  userId: string,
  notificationData: INotification
) => {
  const { user, sender, type, post, group, message } = notificationData;

  const notification = await new Notification({
    user: userId,
    sender,
    type,
    post,
    group,
    message,
  });

  await notification.save();
  return notification;
};

const getNotificationsFormDB = async (userId: string) => {
  const notifications = await Notification.find({ user: userId }).sort({
    createdAt: -1,
  });
  return notifications;
};
export const notificationServices = {
  getNotificationsFormDB,
};
