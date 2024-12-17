import httpStatus from "http-status";

import { Group } from "./group.model";
import { AppError } from "../../error/AppError";
import mongoose from "mongoose";
import { User } from "../user/user.model";

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
  const specificGroup = (
    await groups
      .find((group) => group._id.toString() === groupId)
      ?.populate({
        path: "invitationRequests.user",
        select: "name image _id",
      })
  )?.populate({
    path: "members",
    select: "name image _id",
  });

  return specificGroup;
};
const updateSpecificGroupFromDB = async (
  userId: string,
  groupId: string,
  payload: any
) => {
  console.log(userId);
  const user = await User.findById(userId);
  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, "User not found");
  }
  const updatedGroup = await Group.findOneAndUpdate(
    {
      _id: groupId,
      adminId: userId,
    },
    {
      $set: payload, // Update fields with payload
    },
    {
      new: true,
    }
  );

  if (!updatedGroup) {
    throw new Error(
      "Admin has not given you permission or the group could not be found."
    );
  }

  return updatedGroup;
};
const getGroupsWhereNotInvolvedFromDB = async (userId: string) => {
  console.log(userId);
  const groups = await Group.find({
    $nor: [{ adminId: userId }, { members: userId }],
  });

  return groups;
};
const groupInviteIntoDB = async (groupId: string, userId: string) => {
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

  const result = group.invitationRequests.push({
    user: new mongoose.Types.ObjectId(userId),
    status: "pending",
  });
  await group.save();
  return result;
};

const memberApprovalIntoDB = async (
  groupId: string,
  requestId: string,

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
  updateSpecificGroupFromDB,
};
