import { dependencies } from "../../../utils/dependency.interface";
import { CommentObject } from "../../../utils/interface";
import mongoose, { Types } from "mongoose";
const { ObjectId } = mongoose.Types; 


export const addComment_Usecase = (dependencies: dependencies) => {
  const {
    repository: { postRepository },
  } = dependencies;

  const executeFunction = async (postId: string, comment: CommentObject) => {
    try {
      // comment._id = new ObjectId()
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
