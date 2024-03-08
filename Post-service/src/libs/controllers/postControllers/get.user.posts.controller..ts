import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { findUserPosts_useCase },
  } = dependencies;

  const getUserPostsController = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      console.log("userId:", userId);

      const response = await findUserPosts_useCase(
        dependencies
      ).executeFunction(userId);
      console.log("response:", response);
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
