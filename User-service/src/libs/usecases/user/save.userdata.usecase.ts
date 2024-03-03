import { UserData } from "../../../utils/interfaces/ interfaces";


export const saveUserData_useCase = (dependencies: any) => {
  const {
    repository: { userRepository },
  } = dependencies;

  const executeFunction = async (data: UserData) => {
    try {
      const userId = data._id;

      const user = await userRepository?.findUser(userId);

      const updatedUser = await userRepository?.saveData(data);

      return {
        status: true,
        message: "user data saved successfully",
        user: updatedUser.response,
      };
    } catch (error) {
      console.log(error, 'error in saveUserData_useCase');
      
    }
  };
  return { executeFunction };
};
