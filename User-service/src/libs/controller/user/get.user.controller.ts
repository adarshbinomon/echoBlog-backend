import { Request, Response } from "express";
import { Dependencies } from "../../../utils/interfaces/dependency.interface";

export default (dependencies: Dependencies) => {
  
  const {
    useCase: { getUser_useCase },
  } = dependencies;

  const getUserController = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      const response = await getUser_useCase(dependencies).executeFunction(
        userId
      );

      if (response.status) {
        res
          .status(200)
          .json({ status: true, message: "user found", user: response.user });
      } else {
        res.status(404).json({ status: false, message: response.message });
      }
    } catch (error) {
      res.status(404).json({ status: false, message: "user not found" });
    }
  };
  return getUserController;
};
