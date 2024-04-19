import { Request, Response } from "express";
import { Dependencies } from "../../../utils/interfaces/dependency.interface";

export default (dependencies: Dependencies) => {
  const {
    useCase: { findAllUsersAdmin_useCase },
  } = dependencies;

  const findAllUsersAdminController = async (req: Request, res: Response) => {
    try {
      const response = await findAllUsersAdmin_useCase(
        dependencies
      ).executeFunction();

      if (response.status) {
        res.status(200).json({
          status: true,
          message: "response.message",
          users: response.users,
        });
      } else {
        res.status(404).json({ status: true, message: "response.message" });
      }
    } catch (error) {
      console.log("error in find all user admin controller:", error);

      return { status: false, message: "users not found" };
    }
  };
  return findAllUsersAdminController;
};
