import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { groupServices } from "./grop.services";

const createGroup = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await groupServices.createGroupIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Group Create successfully",
    data: result,
  });
});
const groupsInvite = catchAsync(async (req, res) => {
  const groupId = req.params.id;
  const { userId } = req.body;
  const result = await groupServices.groupInviteIntoDB(groupId, userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invitation request sent successfully!",
    data: result,
  });
});
const memberApproval = catchAsync(async (req, res) => {
  const { groupId, requestId } = req.params;
  const { action } = req.body;
  const result = await groupServices.memberApprovalIntoDB(
    groupId,
    requestId,
    action
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Request ${action}ed successfully!`,
    data: result,
  });
});

export const groupController = {
  groupsInvite,
  memberApproval,
  createGroup,
};
