import { Request, Response } from "express";
import { Dependencies } from "../../../utils/dependency.interface";

export default (dependencies: Dependencies) => {
  const {
    useCase: { findUserPosts_useCase },
  } = dependencies;

  const getUserPostsController = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;

      const response = await findUserPosts_useCase(
        dependencies
      ).executeFunction(userId);
      if (response.status) {
        res.status(200).json({
          status: true,
          message: "posts found",
          posts: response.posts,
        });
      } else {
        res
          .status(404)
          .json({ status: false, message: "error in finding posts" });
      }
    } catch (error) {
      console.log("error", error);

      res
        .status(404)
        .json({ status: false, message: "error in finding posts" });
    }
  };
  return getUserPostsController;
};
