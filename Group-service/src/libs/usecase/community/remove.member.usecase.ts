export const removeMemberUseCase = (dependencies: any) => {
  const {
    repository: { communityRepository },
  } = dependencies;

  const executeFunction = async (communityId: string, memberId: string) => {
    try {
      const response = await communityRepository.removeMember(
        communityId,
        memberId
      );
      if (response.status) {
        return { status: true, message: response.message };
      } else {
        return { status: false, message: response.message };
      }
    } catch (error) {
      console.log("error in remove member usecase:", error);
      return { status: false, message: "error in remmoving member" };
    }
  };
  return { executeFunction };
};
