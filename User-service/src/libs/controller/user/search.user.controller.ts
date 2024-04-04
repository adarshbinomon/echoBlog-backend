import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { searchUserUsecase },
  } = dependencies;

  const searchUserController = async (req: Request, res: Response) => {
    try {
      const { regex } = req.params;

      const response = await searchUserUsecase(dependencies).executeFunction(
        regex
      );

      if (response.status) {
        res.status(200).json({
          status: true,
          message: response.message,
          users: response.users,
        });
      } else {
        res.status(404).json({
          status: false,
          message: response.message,
        });
      }
    } catch (error) {
      console.log("error in search user controller:", error);
      res.status(404).json({
        status: false,
        message: "error in finding user",
      });
    }
  };
  return searchUserController;
};
