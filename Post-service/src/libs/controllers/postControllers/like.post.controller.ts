import { Request, Response } from "express";
import dependencies from "../../../config/dependencies";

export default (dependencies: any) => {
  const {
    useCase: { likePost_useCase },
  } = dependencies;

  const likePostController = async (req: Request, res: Response) => {
    try {
      const postId = req.params.postId;
      const { userId, liked } = req.body;
      console.log(req.body);

      const response = await likePost_useCase(dependencies).executeFunction(
        postId,
        userId,
        liked
      );
      if (response.status) {
        res
          .status(200)
          .json({
            status: true,
            message: "like successfull",
            likes: response?.likes,
          });
      } else {
        res.status(500).json({
          status: false,
          message: "like unsuccessfull",
          likes: response?.likes,
        });
      }
    } catch (error) {
      console.log("error in like post controller: ", error);

      res.status(500).json({ status: false, message: "like unsuccessfull" });
    }
  };
  return likePostController;
};
