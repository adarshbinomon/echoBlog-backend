import { Request, Response } from "express";
import { dependencies } from "../../../utils/dependency.interface";

export default (dependencies: dependencies) => {
  const {
    useCase: { getUserCommunityPost_useCase },
  } = dependencies;

  const getUserCommunityPostController = async (
    req: Request,
    res: Response
  ) => {
    try {
      const userId = req.params.userId;

      const response = await getUserCommunityPost_useCase(
        dependencies
      ).executeFunction(userId);
      if (response.status) {
        res.status(200).json({
          status: true,
          message: response.message,
          posts: response.posts,
        });
      } else {
        res.status(404).json({ status: false, message: response.message });
      }
    } catch (error) {
      console.log("error in get user coommunity post conrtroller:", error);
      res
        .status(404)
        .json({ status: false, message: "error in finding posts" });
    }
  };
  return getUserCommunityPostController;
};
