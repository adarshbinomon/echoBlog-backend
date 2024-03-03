import { Request, Response } from "express";
import { UserData } from "../../../utils/interfaces/ interfaces";

export default (dependencies: any) => {
  const {
    useCase: { editUserProfile_useCase },
  } = dependencies;

  const editUserProfileController = async (req: Request, res: Response) => {
    try {
      const data: UserData = req.file
        ? { ...req.body, [req.file.fieldname]: req.file.filename }
        : { ...req.body };

      const response = await editUserProfile_useCase(
        dependencies
      ).executeFunction(data);

      if (response.status) {
        res
          .status(200)
          .json({ status: true, message: "user data edited successfuly" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ status: false, message: "failed to edit user data" });
    }
  };
  return editUserProfileController;
};
