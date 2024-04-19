import { Request, Response, response } from "express";
import { Dependencies } from "../../../utils/dependency.interface";

export default (dependencies: Dependencies) => {
  const {
    useCase: { likeCommentUseCase },
  } = dependencies;

  const likeCommentController = async (req: Request, res: Response) => {
    try {
      const { commentId } = req.params;
      const { postId, userId, isLiked } = req.body;

      const response = await likeCommentUseCase(dependencies).executeFunction(
        postId,
        commentId,
        userId,
        isLiked
      );

      if (response.status) {
        res.status(201).json({ status: true, message: response.message });
      } else {
        res.status(500).json({ status: false, message: response.message });
      }
    } catch (error) {
      console.log("error in like comment controller:", error);
      res
        .status(500)
        .json({ status: false, message: "errror in liking comment" });
    }
  };
  return likeCommentController;
};
