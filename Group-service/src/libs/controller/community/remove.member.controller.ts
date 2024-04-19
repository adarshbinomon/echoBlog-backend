import { Request, Response } from "express";
import { Dependencies } from "../../../utils/dependencies.interface";

export default (dependencies: Dependencies) => {
  const {
    useCase: { removeMemberUseCase },
  } = dependencies;

  const removeMemberController = async (req: Request, res: Response) => {
    try {
      const { communityId } = req.params;
      const { memberId } = req.body;
      console.log('req.body');
      console.log(req.body);
      

      const response = await removeMemberUseCase(dependencies).executeFunction(
        communityId,
        memberId
      );
      console.log("response:", response);

      if (response.status) {
        res.status(200).json({ status: true, message: response.message });
      } else {
        res.status(500).json({ status: false, message: response.message });
      }
    } catch (error) {
      console.log("error in remove member controller:", error);
      res
        .status(500)
        .json({ status: false, message: "error in removing member" });
    }
  };
  return removeMemberController;
};
