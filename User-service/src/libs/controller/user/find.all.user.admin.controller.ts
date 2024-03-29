import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { findAllUsersAdmin_useCase },
  } = dependencies;

  const findAllUsersAdminController = async (req: Request, res: Response) => {
    console.log("controller");

    try {
      const response = await findAllUsersAdmin_useCase(
        dependencies
      ).executeFunction();
      console.log(response);

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
