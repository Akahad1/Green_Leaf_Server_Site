import { Types } from "mongoose";

export interface TUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "admin" | "user";
  address: string;
  details: string;
  image: string;
  coverImage: string;
  passwordChange: boolean;
  favourite: Types.ObjectId[];
  followers: Types.ObjectId[];
  followed: Types.ObjectId[];
  verified: boolean;
}
