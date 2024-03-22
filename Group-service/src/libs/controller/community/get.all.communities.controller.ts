import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { getAllCommunities_useCase },
  } = dependencies;

  const getAllCommunitiesController = async (req: Request, res: Response) => {
    try {
      const userId = req.params.userId;
      const response = await getAllCommunities_useCase(
        dependencies
      ).executeFunction(userId);
      console.log(response);

      if (response.status) {
        res.status(200).json({
          status: true,
          message: response.message,
          communities: response.communities,
        });
      } else {
        res.status(404).json({ status: false, message: response.message });
      }
    } catch (error) {
      console.log("error in get all community controller:", error);
      res
        .status(404)
        .json({ status: false, message: "error in finding communities" });
    }
  };
  return getAllCommunitiesController;
};
