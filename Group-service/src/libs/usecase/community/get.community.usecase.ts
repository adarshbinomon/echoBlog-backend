export const getCommunity_useCase = (dependencies: any) => {
  const {
    repository: { communityRepository },
  } = dependencies;

  const executeFunction = async (communityId: string) => {
    try {
      const response = await communityRepository.getCommunityWithId(
        communityId
      );
      console.log("usecase:", response);

      if (response.status) {
        return {
          status: true,
          message: response.message,
          community: response.community,
        };
      } else {
        return { status: false, message: response.message };
      }
    } catch (error) {
      console.log("error in get community usecase:", error);
      return { status: false, message: "error in finding community" };
    }
  };
  return { executeFunction };
};
