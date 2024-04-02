import { dependencies } from "../../../utils/dependency.interface";

export const getPost_useCase = (dependencies: dependencies) => {
  const {
    repository: { postRepository },
  } = dependencies;

  const executeFunction = async (id: string) => {
    try {
      const response = await postRepository?.getPost(id);
      const user = await postRepository?.findUser(response.post.createdBy);
      console.log(user.user);

      if (response.status) {
        return {
          status: true,
          message: response.message,
          post: response.post,
          user: user.user,
        };
      } else {
        return { status: false, message: response.message };
      }
    } catch (error) {
      console.log("error", error);

      return { status: false, message: "error in find user post use case" };
    }
  };

  return { executeFunction };
};
