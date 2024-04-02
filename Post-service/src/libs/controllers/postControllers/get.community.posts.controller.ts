import { Request, Response } from "express";
import { dependencies } from "../../../utils/dependency.interface";

export default (dependencies: dependencies) => {
  const {
    useCase: { getCommunityPosts_useCase },
  } = dependencies;

  const getCommunityPostsController = async (req: Request, res: Response) => {
    try {
      const communityId = req.params.communityId;
      const response = await getCommunityPosts_useCase(
        dependencies
      ).executeFunction(communityId);

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
      console.log("error in get community posts controller:", error);
      res
        .status(404)
        .json({ status: false, message: "error in finding possts" });
    }
  };
  return getCommunityPostsController;
};
