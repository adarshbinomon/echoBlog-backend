import { Request, Response } from "express";
import { Dependencies } from "../../../utils/dependencies.interface";

export default (dependencies: Dependencies) => {
  const {
    useCase: { editCommunity_useCase },
  } = dependencies;

  const editCommunityController = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      console.log("dataaaaa", data);

      const communityId = req.params.communityId;

      const response = await editCommunity_useCase(
        dependencies
      ).executeFunction(communityId, data);
      if (response.status) {
        res.status(200).json({
          status: true,
          message: response.message,
          community: response.community,
        });
      } else {
        res.status(500).json({ status: false, message: response.message });
      }
    } catch (error) {
      console.log("error in edit community controller:", error);
      res
        .status(500)
        .json({ status: false, message: "error in editing community" });
    }
  };
  return editCommunityController;
};
