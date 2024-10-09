import httpStatus from "http-status";
import { AppError } from "../../error/AppError";
import { User } from "../user/user.model";
import { TPost } from "./post.interface";
import { Post } from "./post.model";

const createPostIntoDB = async (payload: TPost) => {
  const user = await User.findById({ _id: payload.user });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user not exist");
  }
  const result = await Post.create(payload);
  return result;
};

const getPostFromDB = async () => {
  const result = await Post.find().populate("user");
  return result;
};
const getSpacificPostFromDB = async (id: string) => {
  const result = await Post.findById(id).populate("user");
  return result;
};
const deleteSpacificPostFromDB = async (id: string) => {
  const result = await Post.findByIdAndDelete(id);
  return result;
};
const updatePostFromDB = async (id: string, payload: TPost) => {
  const result = await Post.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

export const PostServices = {
  createPostIntoDB,
  getPostFromDB,
  getSpacificPostFromDB,
  updatePostFromDB,
  deleteSpacificPostFromDB,
};
