export const changeUserStatus_useCase = (dependencies: any) => {
  const {
    repository: { userRepository },
  } = dependencies;

  const executeFunction = async (userId: string) => {
    try {
        console.log('usecase',userId );

      const response = await userRepository.changeUserStatus(userId);
      console.log(response);
      
      if (response.status) {
        return { status: true, message: response.message, user: response.user };
      } else {
        return { status: false, message: response.message };
      }
    } catch (error) {
      console.log("error in change user status usecase:", error);
      return { status: false, message: "error in changing status" };
    }
  };
  return { executeFunction };
};
