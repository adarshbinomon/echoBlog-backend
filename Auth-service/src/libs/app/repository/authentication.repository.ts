import { schema } from "../database";
const { User, Admin } = schema;
import { UserData } from "../../../utils/interface";



export default {
  userEmailExist: async (email: string) => {
    try {
      const response = await User.findOne({ email: email });
      return response;
    } catch (error) {
      console.log("error in authentication.repository.userEmailExist", error);
    }
  },

  createUser: async (data: UserData) => {
    const userData = { ...data };

    const response = await User.create(userData);
    if (response) {
      return { status: true, message: "user created!", response };
    } else {
      return { status: false, message: "user creation failed!" };
    }
  },

  findUser: async (email: string) => {
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        return { status: true, user: user };
      } else {
        return { status: false };
      }
    } catch (error) {
      console.log(error, "error while finding user");
    }
  },

  findAdmin: async (email: string) => {
    try {
      const admin = await Admin.findOne({ email: email });
      if (admin) {
        return { status: true, user: admin };
      }
    } catch (error) {
      console.log(error, "error while finding Admin");
    }
  },
};
