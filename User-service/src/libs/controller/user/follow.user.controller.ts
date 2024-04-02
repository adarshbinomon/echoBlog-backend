import { Request, Response } from "express";
import { dependencies } from "../../../utils/interfaces/dependency.interface";

export default (dependencies: dependencies) => {
  const {
    useCase: { followUser_useCase },
  } = dependencies;

  const followUserController = async (req: Request, res: Response) => {
    try {
      const { userId, userToBeFollowedId } = req.body;
      const response = await followUser_useCase(dependencies).executeFunction(
        userId,
        userToBeFollowedId
      );

      if (response.status) {
        res
          .status(200)
          .json({
            status: true,
            message: response.message,
            user: response.user,
          });
      } else {
        res.status(500).json({ status: false, message: response.message });
      }
    } catch (error) {
      console.log("error in folow user controller");

      return { status: false, message: "user follow failed" };
    }
  };
  return followUserController;
};
