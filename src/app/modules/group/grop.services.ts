import httpStatus from "http-status";

import { Group } from "./group.model";
import { AppError } from "../../error/AppError";
import mongoose from "mongoose";

const createGroupIntoDB = async (payload: any) => {
  const result = await Group.create(payload);
  console.log(result);
  return result;
};
const getMyGroupFromDB = async (userId: string) => {
  const groups = await Group.find({
    $or: [{ adminId: userId }, { members: userId }],
  });

  return groups;
};
const getSpecificGroupFromDB = async (userId: string, groupId: string) => {
  console.log(userId);
  const groups = await Group.find({
    $or: [{ adminId: userId }, { members: userId }],
  });
  const specificGroup = groups.find(
    (group) => group._id.toString() === groupId
  );

  return specificGroup;
};
const getGroupsWhereNotInvolvedFromDB = async (userId: string) => {
  console.log(userId);
  const groups = await Group.find({
    $nor: [{ admin: userId }, { members: userId }],
  });

  return groups;
};
const groupInviteIntoDB = async (userId: string, groupId: string) => {
  const group = await Group.findById(groupId);
  if (!group) {
    throw new AppError(httpStatus.NOT_FOUND, "Group is not exist");
  }
  const alreadyRequested = group.invitationRequests.find(
    (req) => req.user.toString() === userId
  );
  if (alreadyRequested) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "You have already sent a request to join this group."
    );
  }

  group.invitationRequests.push({
    user: new mongoose.Types.ObjectId(userId),
    status: "pending",
  });
  const result = await group.save();
  return result;
};

const memberApprovalIntoDB = async (
  requestId: string,
  groupId: string,
  action: any
) => {
  const group = await Group.findById(groupId);
  if (!group) {
    throw new AppError(httpStatus.NOT_FOUND, "Group is not exist");
  }
  const request = group.invitationRequests.find(
    (req) => req.user.toString() === requestId
  );
  if (!request) {
    throw new AppError(httpStatus.NOT_FOUND, "Request not found!");
  }
  if (action === "accept") {
    request.status = "accepted";
    group.members.push(request.user);
  } else if (action === "reject") {
    request.status = "rejected";
  }
  const result = await group.save();
  return result;
};
export const groupServices = {
  groupInviteIntoDB,
  memberApprovalIntoDB,
  createGroupIntoDB,
  getMyGroupFromDB,
  getGroupsWhereNotInvolvedFromDB,
  getSpecificGroupFromDB,
};
