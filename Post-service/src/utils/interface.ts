import { ObjectId } from "mongoose";

export interface UserData {
  name: string;
  email: string;
  password: string;
  phone?: string;
  uid?: string;
  profilePicture?: string;
  isGoogle?: boolean;
  _id?: string;
}

export interface PostData {
  _id?: string;
  title?: string;
  content: string;
  image?: string;
  like: any[];
  comment?: any[];
  postType?: string;
  createdBy?: string;
  tags?: any[];
  createdOn?: Date;
  reportedUsersList?: any[];
  communityId?: string;
}

export interface CommentObject {
  editedComment: string;
  commentId: string;
  userId: string;
  comment: string;
  name: string;
  profilePicture: string;
  userName: string;
  _id: string;
  reply?: any[];
} 
