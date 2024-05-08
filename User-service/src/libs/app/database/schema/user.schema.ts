import mongoose from "mongoose";

enum accountTypeEnum {
  "Private",
  "Public",
}
enum genderEnum {
  "Male",
  "Female",
  "Other",
}

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  userName: {
    type: String,
  },
  following: Array,
  followers: Array,
  accountType: {
    type: String,
    enum: accountTypeEnum,
  },
  followRequests: Array,
  bio: String,
  phone: {
    type: String,
  },
  posts: {
    type: Array,
  },
  gender: {
    type: String,
    enum: genderEnum,
  },
  dateOfBirth: {
    type: Date,
  },
  profilePicture: {
    type: String,
    default:
      "https://echoblog-images.s3.ap-south-1.amazonaws.com/1709811864797_profilePicture_dummy-profile.png",
  },
  coverPicture: {
    type: String,
    default:
      "https://echoblog-images.s3.ap-south-1.amazonaws.com/1709535142155_coverPicture_9ae8fc22197c56c5e5b0c2c22b05186e+.jpeg",
  },
  InterestedTags: Array,
  createdOn: {
    type: Date,
    default: Date.now(),
  },
  editedOn: {
    type: Date,
  },
  savedPosts: {
    type: Array,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  community: Array,
  isPremium: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

export { User };
