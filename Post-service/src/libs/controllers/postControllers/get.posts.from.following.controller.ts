import { Request, Response } from "express";
export default (dependencies: any) => {
  const {
    useCase: { getPostsFromFollowingUsecase },
  } = dependencies;

  const getPostsFromFollowingController = async (
    req: Request,
    res: Response
  ) => {
    try {
      const { following } = req.body;
      const response = await getPostsFromFollowingUsecase(
        dependencies
      ).executeFunction(following);

      if (response.status) {
        res.status(200).json(response);
      } else {
        res.status(404).json(response);
      }
    } catch (error) {
      return {
        status: false,
        message: "error in get posts from following controller",
      };
    }
  };
  return getPostsFromFollowingController;
};
