import { Dependencies } from "../../../utils/dependency.interface";
import { PostData } from "../../../utils/interface";

export const findUserPosts_useCase = (dependencies: Dependencies) => {

  const {
    repository: { postRepository },
  } = dependencies;

  const executeFunction = async (id: string) => {
    try {
      const response = await postRepository?.findPosts(id);

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
      console.log("error", error);

      return { status: false, message: "error in find user posts use case" };
    }
  };

  return { executeFunction };
};
