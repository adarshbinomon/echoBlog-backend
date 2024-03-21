import { Request, Response } from "express";
import dependencies from "../../../config/dependencies";

export default (dependencies: any) => {
  const {
    useCase: { updataPostStatus_useCase },
  } = dependencies;

  const updatePostStatusAdminController = async (
    req: Request,
    res: Response
  ) => {
    try {
      const postId = req.params.postId;
      console.log(postId);
      

      const response = await updataPostStatus_useCase(
        dependencies
      ).executeFunction(postId);

      if (response.status) {
        res
          .status(200)
          .json({
            status: true,
            message: response.message,
            post: response.post,
          });
      } else {
        res.status(404).json({ status: false, message: response.message });
      }
    } catch (error) {
      console.log("error in update post status controller:", error);
      res
        .status(404)
        .json({ status: false, message: "error in changing status" });
    }
  };
  return updatePostStatusAdminController;
};
