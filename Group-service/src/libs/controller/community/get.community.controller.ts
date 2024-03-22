import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { getCommunity_useCase },
  } = dependencies;

  const getCommunityController = async (req: Request, res: Response) => {
    try {
      const communityId = req.params.communityId;

      //   const { executeFunction } = await getCommunity_useCase(dependencies);
      //   const response = await executeFunction(communityId);

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
