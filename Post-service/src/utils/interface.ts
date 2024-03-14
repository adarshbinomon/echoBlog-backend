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
  title?: string;
  content?: string;
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
