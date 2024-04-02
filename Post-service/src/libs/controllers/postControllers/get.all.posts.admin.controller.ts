import { Request, Response } from "express";
import { dependencies } from "../../../utils/dependency.interface";

export default (dependencies: dependencies) => {
  const {
    useCase: { getAllPostsAdmin_useCase },
  } = dependencies;
  const getAllPostsAdminController = async (req: Request, res: Response) => {
    try {
      console.log('controller');
      
      const response = await getAllPostsAdmin_useCase(
        dependencies
      ).executeFunction();

      if (response.status) {
        res.status(200).json({
          status: true,
          posts: response.posts,
          message: response.message,
        });
      } else {
        res.status(500).json({ status: false, message: response.message });
      }
    } catch (error) {
      res.status(500).json({ status: false, message: "posts not found" });
    }
  };
  return getAllPostsAdminController;
};
