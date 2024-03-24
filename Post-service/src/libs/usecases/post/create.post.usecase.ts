import { PostData } from "../../../utils/interface";
import { imgExtractor } from "../../../helper/imgExtractor";

export const createPost_UseCase = (dependencies: any) => {
  const {
    repository: { postRepository },
  } = dependencies;

  const executeFunction = async (data: PostData) => {
    try {
      console.log("Use case received data:", data);
      const image = imgExtractor(data?.content);

      data = { ...data, image };
      console.log('usecase',data);

      const response = await postRepository?.createPost(data);

      if (response?.status) {
        return { status: true, message: response.message, post: response.post };
      } else {
        return {
          status: false,
          message: response?.message ?? "Unknown error occurred",
        };
      }
    } catch (error) {
      console.error("Error in createPost_UseCase:", error);
      return { status: false, message: `Error in createPost_UseCase` };
    }
  };

  return { executeFunction };
};
