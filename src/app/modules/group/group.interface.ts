import { Types } from "mongoose";

export interface IGroup {
  name: string;
  description?: string;
  adminId: Types.ObjectId;

  coverImage: string;
  members: Types.ObjectId[];
  posts: Types.ObjectId[];
  invitationRequests: InvitationRequest[];
  createdAt: Date; // Creation timestamp
}

interface InvitationRequest {
  user: Types.ObjectId; // Reference to the User who requested
  status: "pending" | "accepted" | "rejected"; // Status of the invitation
}
