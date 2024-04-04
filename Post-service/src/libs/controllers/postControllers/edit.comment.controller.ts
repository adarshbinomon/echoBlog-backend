import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { editCommentUseCase },
  } = dependencies;

  const editCommentController = async (req: Request, res: Response) => {
    try {
      const { postId } = req.params;
      const commentData = req.body;

      const response = await editCommentUseCase(dependencies).executeFunction(
        postId,
        commentData
      );

      if (response.status) {
        res.status(201).json({ status: true, message: response.message });
      } else {
        res.status(500).json({ status: true, message: response.message });
      }
    } catch (error) {
      res
        .status(500)
        .json({ status: true, message: "error in editing comment" });
    }
  };
  return editCommentController;
};
