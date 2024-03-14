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
};
