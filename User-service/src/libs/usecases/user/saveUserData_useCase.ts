interface userData {
  name: string;
  email: string;
  userName: string;
  following: any[];
  followers: any[];
  accountType: string;
  bio: string;
  phone: string;
  gender: string;
  dateOfBirth: Date;
  profilePicture: string;
  coverPicture: string;
  interestedTags: string[];
  createdOn: Date;
  editedOn: Date;
  _id: string;
}

export const saveUserData_useCase = (dependencies: any) => {
  const {
    repository: { userRepository },
  } = dependencies;

  const executeFunction = async (data: userData) => {
    try {
      const userId = data._id;

      const user = await userRepository?.findUser(userId);

      const updatedUser = await userRepository?.saveData(data);

      return {
        status: true,
        message: "user data saved successfully",
        user: updatedUser.response,
      };
    } catch (error) {}
  };
  return { executeFunction };
};
