import { Request, Response } from "express";
import { Dependencies } from "../../../utils/dependency.interface";

export default (dependencies: Dependencies) => {
  const {
    useCase: { deleteCommentUseCase },
  } = dependencies;

  const deleteCommentController = async (req: Request, res: Response) => {
    try {
      const { postId } = req.params;
      const { commentId } = req.body;

      const response = await deleteCommentUseCase(dependencies).executeFunction(
        postId,
        commentId
      );
      if (response.status) {
        res.status(200).json({ status: true, message: response.message });
      } else {
        res.status(500).json({ status: false, message: response.message });
      }
    } catch (error) {
      console.log("error in delete comment controller:", error);
      res
        .status(500)
        .json({ status: false, message: "error in deleting comment" });
    }
  };
  return deleteCommentController;
};
