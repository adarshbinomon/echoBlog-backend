import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { searchCommunityUseCase },
  } = dependencies;

  const searchCommunityController = async (req: Request, res: Response) => {
    try {
      const { regex } = req.params;

      const response = await searchCommunityUseCase(
        dependencies
      ).executeFunction(regex);
      console.log(response);
      

      if (response.status) {
        res.status(200).json({
          status: true,
          message: response.message,
          communities: response.communities,
        });
      } else {
        res.status(404).json({
          status: false,
          message: response.message,
        });
      }
    } catch (error) {
      console.log("error in search community controller:", error);
      res.status(404).json({
        status: false,
        message: "error in finding community",
      });
    }
  };
  return searchCommunityController;
};
