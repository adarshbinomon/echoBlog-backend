import mongoose from "mongoose";

enum accountTypeEnum {
  "private",
  "public",
}
enum genderEnum {
  "Male",
  "Female",
  "Other",
}

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    // required: true,
  },
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  userName: {
    type: String,
    // required: true,
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
    // required: true,
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
    // required: true,
  },
  profilePicture: {
    type: String,
    default:
      "https://echoblog-images.s3.ap-south-1.amazonaws.com/1709811864797_profilePicture_dummy-profile.png",
  },
  coverPicture: {
    type: String,
    default:
      "https://echoblog-images.s3.ap-south-1.amazonaws.com/1709535374314_coverPicture_9ae8fc22197c56c5e5b0c2c22b05186e+.jpeg",
  },
  InterestedTags: Array,
  createdOn: {
    type: Date,
    // required: true,
    default: Date.now(),
  },
  editedOn: {
    type: Date,
    // required: true,
  },
});

const User = mongoose.model("User", userSchema);

export { User };
