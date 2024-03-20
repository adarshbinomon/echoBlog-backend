import { Request, Response } from "express";
import dependencies from "../../../config/dependencies";

export default (dependencies: any) => {
  const {
    useCase: { changeUserStatus_useCase },
  } = dependencies;

  const changeUserStatusAdminController = async (
    req: Request,
    res: Response
  ) => {
    try {
      const userId = req.params.userId;
      const response = await changeUserStatus_useCase(
        dependencies
      ).executeFunction(userId);

      if (response.status) {
        res.status(201).json({
          status: true,
          message: response.message,
          user: response.user,
        });
      } else {
        res.status(500).json({ status: false, message: response.message });
      }
    } catch (error) {
      console.log("error in change user status controller:", error);
      return { status: true, message: "error in changing status" };
    }
  };
  return changeUserStatusAdminController;
};
