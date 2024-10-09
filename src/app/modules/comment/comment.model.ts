import { model, Schema } from "mongoose";
import { TComment } from "./comment.inerface";

const commentSchma = new Schema<TComment>(
  {
    user: { type: Schema.Types.ObjectId, ref: "user", required: true },
    post: { type: Schema.Types.ObjectId, ref: "post", required: true },
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Comment = model<TComment>("Comment", commentSchma);
