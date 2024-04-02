import { Request, Response } from "express";
import { dependencies } from "../../../utils/dependencies.interface";

export default (dependencies: dependencies) => {
  
  const {
    useCase: { getCommunity_useCase },
  } = dependencies;

  const getCommunityController = async (req: Request, res: Response) => {
    try {
      const communityId = req.params.communityId;

      const response = await getCommunity_useCase(dependencies).executeFunction(
        communityId
      );
      console.log(response);
      if (response.status) {
        res.status(200).json({
          status: true,
          message: response.message,
          community: response.community,
        });
      } else {
        res.status(404).json({ status: false, message: response.message });
      }
    } catch (error) {
      console.log("error in get community controller:", error);
      res
        .status(404)
        .json({ status: false, message: "error in finding community" });
    }
  };
  return getCommunityController;
};
