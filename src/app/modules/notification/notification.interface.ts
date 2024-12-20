import { Types } from "mongoose";

export interface INotification extends Document {
  user: Types.ObjectId; // যার জন্য নোটিফিকেশন
  sender: Types.ObjectId; // কে নোটিফিকেশনটি ট্রিগার করেছে
  type: "upvote" | "downvote" | "comment" | "invite_accept";
  post?: Types.ObjectId; // কোন পোস্টের জন্য নোটিফিকেশন
  group?: Types.ObjectId; // কোন গ্রুপের জন্য নোটিফিকেশন
  message: string; // নোটিফিকেশন মেসেজ
  isRead: boolean; // ইউজার এটি পড়েছে কি না
  createdAt: Date;
}
