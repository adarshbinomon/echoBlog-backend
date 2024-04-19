import { Request, Response } from "express";
import { Dependencies } from "../../../../utils/dependencies.interface";

export default (dependencies: Dependencies) => {
  const {
    useCase: { changePasswordUsecase },
  } = dependencies;

  const changePasswordController = async (req: Request, res: Response) => {
    try {
      const { password } = req.body;
      const email = req.session.email;
      console.log(password, email);

      const response = await changePasswordUsecase(
        dependencies
      ).executeFunction(email, password);

      if (response.status) {
        res.status(204).json(response);
      } else {
        res.status(500).json(response);
      }
    } catch (error) {
      console.log("error in change password controller:", error);
      res
        .status(500)
        .json({ status: false, message: "error in changing password" });
    }
  };
  return changePasswordController;
};
