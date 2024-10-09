import { model, Schema } from "mongoose";
import { TPost } from "./post.interface";

const PostSchema = new Schema<TPost>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    image: { type: String },
    text: { type: String, required: true },
    premium: { type: Boolean, default: false },
    upvote: { type: Number, default: 0 },
    downvote: { type: Number, default: 0 },
    catagory: {
      type: String,
      enum: ["Vegetables", "Flowers", "Herbs", "Fruits"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Post = model<TPost>("Post", PostSchema);
