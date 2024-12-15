import { Types } from "mongoose";

export interface TPost {
  user: Types.ObjectId;
  group?: Types.ObjectId;
  image: string;
  text: string;
  premium: boolean;
  upvote: number;
  downvote: number;
  upvotedUsers: Types.ObjectId[];
  downvotedUsers: Types.ObjectId[];

  catagory: "Vegetables" | "Flowers" | "Herbs" | "Fruits";
}
