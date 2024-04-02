import { Request, Response } from "express";
import { dependencies } from "../../../utils/interfaces/dependency.interface";

export default (dependencies: dependencies) => {
  const {
    useCase: { findAllUsers_useCase },
  } = dependencies;

  const findAllUsersController = async (req: Request, res: Response) => {
    try {
      const userId = req.params.userId;
      const response = await findAllUsers_useCase(
        dependencies
      ).executeFunction(userId);

      if (response.status) {
        res.status(200).json({
          status: true,
          message: response.message,
          users: response.users,
        });
      } else {
        res.status(500).json({ status: false, message: response.message });
      }
    } catch (error) {
      console.log("error in find all user controller:", error);
      res.status(500).json({ status: false, message: "cannot find users" });
    }
  };
  return findAllUsersController;
};
