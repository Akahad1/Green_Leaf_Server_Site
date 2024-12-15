import { Schema, model, Types } from "mongoose";
import { IGroup } from "./group.interface";

const groupSchema = new Schema<IGroup>({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  coverImage: { type: String },
  adminId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  invitationRequests: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" },
      status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
      },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

export const Group = model<IGroup>("Group", groupSchema);
