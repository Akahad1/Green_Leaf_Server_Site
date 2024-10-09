import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchma = new Schema<TUser>({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  address: {
    type: String,
    default: "You Can Add Your Address",
  },
  details: {
    type: String,
    default: "You Can Add Your Bio",
  },
  image: {
    type: String,
  },
  coverImage: {
    type: String,
    default: "",
  },
  passwordChange: {
    type: Boolean,
    default: false,
  },
  favourite: [
    {
      type: Schema.Types.ObjectId,
      ref: "post", // Replace with the model name this references
    },
  ],
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: "user", // Assumed self-reference to other users
    },
  ],
  followed: [
    {
      type: Schema.Types.ObjectId,
      ref: "user", // Assumed self-reference to other users
    },
  ],
  verified: {
    type: Boolean,
    default: false,
  },
});

export const User = model<TUser>("User", userSchma);
