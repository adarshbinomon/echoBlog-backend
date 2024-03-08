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
  
});

const User = mongoose.model("User", userSchema);

export { User };
