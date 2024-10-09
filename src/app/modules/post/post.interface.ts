import { Types } from "mongoose";

export interface TPost {
  user: Types.ObjectId;
  image: string;
  text: string;
  premium: boolean;
  upvote: number;
  downvote: number;

  catagory: "Vegetables" | "Flowers" | "Herbs" | "Fruits";
}
