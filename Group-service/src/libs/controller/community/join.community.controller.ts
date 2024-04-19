import { Request, Response } from "express";
import community from ".";
import { Dependencies } from "../../../utils/dependencies.interface";

export default (dependencies: Dependencies) => {
  const {
    useCase: { joinCommunity_useCase },
  } = dependencies;

  const joinCommunityController = async (req: Request, res: Response) => {
    try {
      const { userId, communityId } = req.body;
      console.log(userId, communityId);
      

      const response = await joinCommunity_useCase(
        dependencies
      ).executeFunction(userId, communityId);

      if (response.status) {
        res.status(201).json({
          status: true,
          message: response.message,
          community: response.commuinity,
        });
      } else {
        res.status(500).json({ status: true, message: response.message });
      }
    } catch (error) {
      console.log("error in jopin community controller:", error);
    }
  };
  return joinCommunityController;
};
