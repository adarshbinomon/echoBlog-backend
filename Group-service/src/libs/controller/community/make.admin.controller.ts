import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { makeAdminUseCase },
  } = dependencies;

  const makeAdminController = async (req: Request, res: Response) => {
    try {
      const { communityId } = req.params;
      const { memberId } = req.body;
      console.log(communityId);

      const response = await makeAdminUseCase(dependencies).executeFunction(
        communityId,
        memberId
      );
      console.log(response);

      if (response.status) {
        res.status(201).json({ status: true, message: response.message });
      } else {
        res.status(500).json({ status: true, message: response.message });
      }
    } catch (error) {
      console.log("error in make admin controller:", error);
      res
        .status(500)
        .json({ status: true, message: "error in making user admin" });
    }
  };
  return makeAdminController;
};
