import { Request, Response } from "express";
export default (dependencies: any) => {
  const {
    useCase: { getCommunityMembers_useCase },
  } = dependencies;

  const getCommunityMembersController = async (req: Request, res: Response) => {
    try {
      const communityId = req.params.communityId;
      const response = await getCommunityMembers_useCase(
        dependencies
      ).executeFunction(communityId);

      if (response.status) {
        res.status(200).json({
          status: true,
          message: response.message,
          users: response.users,
        });
      } else {
        res.status(404).json({ status: false, message: response.message });
      }
    } catch (error) {
      console.log("error in get community members controller: ", error);
      res
        .status(404)
        .json({ status: false, message: "error in finding members" });
    }
  };
  return getCommunityMembersController;
};
