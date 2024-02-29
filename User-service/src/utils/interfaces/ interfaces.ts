export interface UserData {
  _id: string;
  name: string;
  email: string;
  userName: string;
  accountType?: string;
  bio?: string;
  phone?: string;
  gender?: string;
  dateOfBirth?: Date;
  profilePicture?: string;
  coverPicture?: string;
  following?: any[];
  followers?: any[];
  interestedTags?: string[];
  createdOn?: Date;
  editedOn?: Date;
}
