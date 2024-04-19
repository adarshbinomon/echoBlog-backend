import { Request, Response } from "express";
import { Dependencies } from "../../../utils/dependency.interface";

export default (dependencies: Dependencies) => {
  const {
    useCase: { getAllPosts_useCase },
  } = dependencies;
  const getAllPostsController = async (req: Request, res: Response) => {
    try {
      const response = await getAllPosts_useCase(
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
  return getAllPostsController;
};
