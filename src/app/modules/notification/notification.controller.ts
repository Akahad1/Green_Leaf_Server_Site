import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { notificationServices } from "./notification.services";

const getNotifications = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await notificationServices.getNotificationsFormDB(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get notification Successfully",
    data: result,
  });
});

export const notificationController = {
  getNotifications,
};
