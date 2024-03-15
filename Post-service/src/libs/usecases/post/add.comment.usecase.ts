import { CommentObject } from "../../../utils/interface";

export const addComment_Usecase = (dependencies: any) => {
  const {
    repository: { postRepository },
  } = dependencies;

  const executeFunction = async (postId: string, comment: CommentObject) => {
    try {
      const response = await postRepository?.addComment(postId, comment);
      if (response.status) {
        return { status: true, messge: response.message, comment: response.comment };
      } else {
        return { status: false, messge: response.message };
      }
    } catch (error) {
      return { status: false, message: "error in adding comment" };
    }
  };
  return { executeFunction };
};
