import httpStatus from "http-status";
import { AppError } from "../../error/AppError";
import { User } from "../user/user.model";
import { TComment } from "./comment.inerface";
import { Comment } from "./comment.model";
import { Post } from "../post/post.model";
import { Types } from "mongoose";

const createCommentIntoDB = async (payload: TComment) => {
  const { user, post } = payload;
  const users = await User.findById(user);
  if (!users) {
    throw new AppError(httpStatus.NOT_FOUND, "User is not exist");
  }
  const posts = await Post.findOne({ _id: post });
  const postUserId = posts?.user.toString();
  console.log("postUserID", postUserId);
  console.log("user", user);

  if (!posts) {
    throw new AppError(httpStatus.NOT_FOUND, "post is not exist");
  }
  const result = await Comment.create(payload);
  return result;
};
const getCommentFromDB = async (id: any) => {
  const result = await Comment.find({ post: id });

  return result;
};
const deleteCommentFromDB = async (id: string) => {
  const result = await Comment.findByIdAndDelete(id);

  return result;
};
const updateCommentFromDB = async (id: string, payload: TComment) => {
  const result = await Comment.findOneAndUpdate(
    { _id: id },
    { text: payload.text },
    {
      new: true,
    }
  );

  return result;
};

export const commentServies = {
  createCommentIntoDB,
  getCommentFromDB,
  deleteCommentFromDB,
  updateCommentFromDB,
};
