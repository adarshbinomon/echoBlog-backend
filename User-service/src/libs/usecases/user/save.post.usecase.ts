export const savePost_useCase = (dependenciees: any) => {
  const {
    repository: { userRepository },
  } = dependenciees;

  const executeFunction = async (userId: string, postId: string) => {
    try {
      const response = await userRepository.addPostToSave(userId, postId);
      if (response.status) {
        return { status: true, message: response.message };
      } else {
        return { status: false, message: response.message };
      }
    } catch (error) {
      console.log("error in save.post.usecase:", error);
      return { status: true, message: "error in save post controller" };
    }
  };
  return { executeFunction };
};
