import dependencies from "../../../config/dependencies";

export const joinCommunity_useCase = (dependencies: any) => {
  const {
    repository: { userRepository },
  } = dependencies;

  const executeFunction = async (userId: string, communityId: string) => {
    try {
      const response = await userRepository.joinCommunity(userId, communityId);

      if (response.status) {
        return { status: true, message: response.message };
      } else {
        return { status: true, message: response.message };
      }
    } catch (error) {
      console.log("error in jpin community usecase:", error);
      return { status: true, message: "error in adding community" };
    }
  };
  return { executeFunction };
};
