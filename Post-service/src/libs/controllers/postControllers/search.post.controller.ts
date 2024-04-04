import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { searchPostUseCase },
  } = dependencies;

  const searchPostController = async (req: Request, res: Response) => {
    try {
      const { regex } = req.params;
      console.log(regex);

      const response = await searchPostUseCase(dependencies).executeFunction(
        regex
      );
      console.log('response',response);
      

      if (response.status) {
        res.status(200).json({
          status: true,
          message: response.message,
          posts: response.posts,
        });
      } else {
        res.status(404).json({
          status: false,
          message: response.message,
        });
      }
    } catch (error) {
      console.log("error in search post controller:", error);
      res.status(404).json({
        status: false,
        message: "error in finding post",
      });
    }
  };
  return searchPostController;
};
