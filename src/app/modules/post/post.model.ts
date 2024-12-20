import { model, Schema } from "mongoose";
import { TPost } from "./post.interface";

const PostSchema = new Schema<TPost>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    group: { type: Schema.ObjectId, ref: "Group" },
    image: { type: String },
    text: { type: String, required: true },
    premium: { type: Boolean, default: false },
    upvote: { type: Number, default: 2 },
    downvote: { type: Number, default: 1 },
    catagory: {
      type: String,
      enum: ["Vegetables", "Flowers", "Herbs", "Fruits"],
      required: true,
    },
    upvotedUsers: [{ type: Schema.Types.ObjectId, ref: "User" }], // To track users who upvoted
    downvotedUsers: [{ type: Schema.Types.ObjectId, ref: "User" }], // T
  },
  {
    timestamps: true,
  }
);

export const Post = model<TPost>("Post", PostSchema);
