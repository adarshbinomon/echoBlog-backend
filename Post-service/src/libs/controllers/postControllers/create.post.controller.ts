import { Request, Response } from "express";
import { PostData } from "../../../utils/interface";
import { dependencies } from "../../../utils/dependency.interface";

export default (dependencies: dependencies) => {
  const {
    useCase: { createPost_UseCase },
  } = dependencies;

  const createPostController = async (req: Request, res: Response) => {
    try {
      const data = req.body;

      console.log("Received data:", data);

      const response = await createPost_UseCase(dependencies).executeFunction(
        data
      );

      console.log("Response:", response);

      if (response.status) {
        res
          .status(201)
          .json({ status: true, message: "Post created successfully" });
      } else {
        res
          .status(400)
          .json({ status: false, message: "Post creation failed" });
      }
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  };

  return createPostController;
};
