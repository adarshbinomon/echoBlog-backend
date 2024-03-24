import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { getUserCommunities_useCase },
  } = dependencies;

  const getUserCommunitiesController = async (req: Request, res: Response) => {
    try {
      const userId = req.params.userId;

      const response = await
        getUserCommunities_useCase(dependencies).executeFunction(userId);
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
      return { status: false, message: "error in finding communities" };
    }
  };
  return getUserCommunitiesController;
};
