import { Request, Response } from "express";
import { dependencies } from "../../../utils/dependency.interface";

export default (dependencies: dependencies) => {
  const {
    useCase: { addComment_Usecase },
  } = dependencies;
  const addCommentController = async (req: Request, res: Response) => {
    try {
      const postId = req.params.postId;
      const comment = req.body;
      const response = await addComment_Usecase(dependencies).executeFunction(
        postId,
        comment
      );

      if (response.status) {
        res.status(201).json({ status: true, message: "comment added", comment: response.comment });
      } else {
        res.status(500).json({ status: false, message: "comment not added" });
      }
    } catch (error) {
      console.log("error in add comment controller:", error);

      res.status(500).json({ status: false, message: "comment not added" });
    }
  };
  return addCommentController;
};
