import mongoose from "mongoose";

const accountTypeEnum = ["private", "public"];
const genderEnum = ["Male", "Female", "Other"];

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
  gender: {
    type: String,
    enum: genderEnum,
  },
  dateOfBirth: {
    type: Date,
    // required: true,
  },
  profilePicture: String,
  coverPicture: String,
  InterestedTags: Array,
  createdOn: {
    type: Date,
    // required: true,
  },
  editedOn: {
    type: Date,
    // required: true,
  },
});

const User = mongoose.model("User", userSchema);

export { User };
