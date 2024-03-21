import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { createCommunity_usecase },
  } = dependencies;

  const createCommunityController = async (req: Request, res: Response) => {
    try {
      const data = { ...req.body };
      const { executeFunction } = await createCommunity_usecase(dependencies);
      const response = await executeFunction(data);
      if (response.status) {
        res.status(201).json({
          status: true,
          message: response.message,
          community: response.commuinity,
        });
      } else {
        res.status(500).json({ status: false, message: response.message });
      }
    } catch (error) {
      console.log("error in create community controler:", error);
      res
        .status(500)
        .json({ status: false, message: "error in creating community" });
    }
  };
  return createCommunityController;
};
