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
const getMyGroup = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await groupServices.getMyGroupFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get Group  successfully",
    data: result,
  });
});
const getSpecificGroup = catchAsync(async (req, res) => {
  const { userId, groupId } = req.params;
  const result = await groupServices.getSpecificGroupFromDB(userId, groupId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get Specific Group  successfully",
    data: result,
  });
});
const updateSpecificGroup = catchAsync(async (req, res) => {
  const { userId, groupId } = req.params;

  const result = await groupServices.updateSpecificGroupFromDB(
    userId,
    groupId,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " Update Specific Group  successfully",
    data: result,
  });
});
const getGroupsWhereNotInvolved = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await groupServices.getGroupsWhereNotInvolvedFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get Group  successfully",
    data: result,
  });
});
const groupsInvite = catchAsync(async (req, res) => {
  const groupId = req.params.id;
  const { userId } = req.params;

  console.log(groupId, "userId", userId);
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
  console.log(groupId, requestId, action);
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
  getMyGroup,
  getGroupsWhereNotInvolved,
  getSpecificGroup,
  updateSpecificGroup,
};
