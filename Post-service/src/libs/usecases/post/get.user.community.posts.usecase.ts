export const getUserCommunityPost_useCase = (dependencies: any) => {
  const {
    repository: { postRepository },
  } = dependencies;

  const executeFunction = async (userId: string) => {
    try {
      const response = await postRepository.findUserCommunityPosts(userId);

      if (response.status) {
        return {
          status: true,
          message: response.message,
          posts: response.posts,
        };
      } else {
        return { status: false, message: response.message };
      }
    } catch (error) {
      console.log("error in get user community posts usecase:", error);
      return { status: true, message: "error in finding posts" };
    }
  };
  return { executeFunction };
};
