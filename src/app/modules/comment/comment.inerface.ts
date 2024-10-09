import { Types } from "mongoose";

export interface TComment {
  user: Types.ObjectId;
  post: Types.ObjectId;
  text: string;
}
