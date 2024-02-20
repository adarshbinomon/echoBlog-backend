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
  createUser: async (data: any) => {
    try {
      const userData = {
        _id: data._id || "",
        name: data.name || "",
        profilePicture: data.profile || "",
        email: data.email || "",
        isGoogle: data.isGoogle || "",
        userName: data.userName || "",
        following: data.following || [],
        followers: data.followers || [],
        accountType: data.accountType || "public",
        followRequests: data.followRequests || [],
        bio: data.bio || "",
        phone: data.phone || "",
        dateOfBirth: data.dateOfBirth || "",
        coverPicture: data.coverPicture || "",
        createdOn: Date.now(),
        editedOn: Date.now(),
      };
      const response = await schema.User.create(userData);
      console.log(response, "rees");

      if (response) {
        return { status: true, message: "user created sucessfully", response };
      } else {
        return { status: false, message: "user cretion failed" };
      }
    } catch (error) {
      console.log(
        "Error in the cretae user in the auth service / repositery ",
        error
      );
    }
  },

  saveData: async (data: any) => {
    try {
      const userData = {
        name: data.name,
        userName: data.userName,
        following: data.following,
        followers: data.followers,
        accountType: data.accountType,
        bio: data.bio,
        phone: data.phone,
        gender: data.gender,
        dateOfBirth: data.dateOfBirth,
        profilePicture: data.profilePicture,
        coverPicture: data.coverPicture,
        interestedTags: data.interestedTags,
        createdOn: data.createdOn,
        editedOn: Date.now(),
      };

      let response = await User.findOneAndUpdate(
        { _id: data._id },
        { $set: userData },
        { new: true }
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
      console.log(userId);
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
