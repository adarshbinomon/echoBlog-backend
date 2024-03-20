export const findAllUsersAdmin_useCase = (dependencies: any) => {
  const {
    repository: { userRepository },
  } = dependencies;

  const executeFunction = async () => {
    try {
      const response = await userRepository.findAllUsers();
console.log(response);

      if (response.status) {
        return {
          status: true,
          message: response.message,
          users: response.users,
        };
      } else {
        return { status: false, message: response.message };
      }
    } catch (error) {
      console.log("error in find all user usecase:", error);

      return { status: false, message: "error in find all users usecase" };
    }
  };
  return { executeFunction };
};
