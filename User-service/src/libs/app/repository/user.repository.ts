import { UserData } from "../../../utils/interfaces/interfaces";
import { schema } from "../database";

const { User } = schema;

export default {
  userEmailExist: async (email: string) => {
    try {
      let response = await User.findOne({ email: email });
      return response;
    } catch (error) {
      console.log("error in authentication.repository.userEmailExist", error);
    }
  },
  createUser: async (data: UserData) => {
    try {
      const userData = { ...data, createdOn: Date.now() };

      const response = await schema.User.create(userData);
      console.log(response, "rees");

      if (response) {
        return { status: true, message: "user created sucessfully", response };
      } else {
        return { status: false, message: "user creation failed" };
      }
    } catch (error) {
      console.log(
        "Error in the creating user in the auth service / repository ",
        error
      );
    }
  },

  saveData: async (data: UserData) => {
    try {
      const userData = { ...data, editedOn: Date.now() };

      let response = await User.findOneAndUpdate(
        { _id: data._id },
        { $set: userData },
        { new: true, upsert: true }
      );

      return {
        status: true,
        response,
        message: "User details saved successfully",
      };
    } catch (error) {
      return {
        status: false,
        message: "user data failed to save",
        error: error,
      };
    }
  },

  findUser: async (userId: string) => {
    try {
      const user = await User.findById(userId);
      if (user) {
        return { status: true, user: user };
      } else {
        return { status: false, message: "user not found" };
      }
    } catch (error) {
      console.log(error, "error while finding user");
    }
  },

  findAllUsersExcept: async (userId: string) => {
    try {
      const users = await User.find({ _id: { $ne: userId } });
      if (users) {
        return { status: true, users: users, message: "Users found" };
      }
    } catch (error) {
      console.log("Error in find all user repository:", error);
      return { status: false, message: "Users not found" };
    }
  },

  addPostToSave: async (userId: string, postId: string) => {
    try {
      const response = await User.findByIdAndUpdate(
        userId,
        { $push: { savedPosts: postId } },
        { new: true, useFindAndModify: false }
      );

      if (response) {
        return { status: true, message: "post saved successfully" };
      }
    } catch (error) {
      console.log("error in post save repository:", error);
      return { status: false, message: "error in post save repository" };
    }
  },
};
