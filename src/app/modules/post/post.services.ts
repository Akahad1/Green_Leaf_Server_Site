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

const getPostFromDB = async (querys: any) => {
  const { catagory, search } = querys;
  console.log(catagory, search);
  const query: any = {};

  if (search) {
    query.text = { $regex: search, $options: "i" }; // Case-insensitive search
  }

  if (catagory && catagory !== "") {
    query.catagory = catagory;
  }

  const result = await Post.find(query).populate("user").sort({ upvote: -1 });
  return result;
};
const getSpacificPostFromDB = async (id: string) => {
  const result = await Post.find({ user: id }).populate("user");
  return result;
};
const deleteSpacificPostFromDB = async (id: string) => {
  const result = await Post.findByIdAndDelete(id);
  return result;
};
const updatePostFromDB = async (id: string, payload: any) => {
  const post = await Post.findById(id);

  if (!post) {
    throw new Error("Post not found");
  }

  const alreadyUpvoted = post.upvotedUsers.includes(payload.user);
  const alreadyDownvoted = post.downvotedUsers.includes(payload.user);

  // Logic to handle votesdownvotedUsers
  if (payload.vote === "upvote") {
    if (alreadyUpvoted) {
      post.upvote -= 1; // Remove upvote if already upvoted
      post.upvotedUsers = post.upvotedUsers.filter(
        (user) => user !== payload.user
      );
    } else {
      post.upvote += 1;
      post.upvotedUsers.push(payload.user);

      // If the user had downvoted before, remove the downvote
      if (alreadyDownvoted) {
        post.downvote -= 1;
        post.downvotedUsers = post.downvotedUsers.filter(
          (user) => user !== payload.user
        );
      }
    }
    const updatedPost = await post.save();
    return updatedPost;
  } else if (payload.vote === "downvote") {
    if (alreadyDownvoted) {
      post.downvote -= 1; // Remove downvote if already downvoted
      post.downvotedUsers = post.downvotedUsers.filter(
        (user) => user !== payload.user
      );
    } else {
      post.downvote += 1;
      post.downvotedUsers.push(payload.user);

      // If the user had upvoted before, remove the upvote
      if (alreadyUpvoted) {
        post.upvote -= 1;
        post.upvotedUsers = post.upvotedUsers.filter(
          (user) => user !== payload.user
        );
      }
    }
    const updatedPost = await post.save();
    return updatedPost;
  }
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
