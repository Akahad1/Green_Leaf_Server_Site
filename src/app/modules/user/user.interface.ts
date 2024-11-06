import { Types } from "mongoose";
import { USER_ROLE } from "./user.constent";

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
export type TUserRole = keyof typeof USER_ROLE;
