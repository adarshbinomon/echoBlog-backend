import { Dependencies } from "../../../utils/dependencies.interface";
import { Request, Response } from "express";

export default (dependencies: Dependencies) => {
  const {
    useCase: { sendVideocallUseCase },
  } = dependencies;

  const sendVideoCallController = async (req: Request, res: Response) => {
    try {
      const { senderId, roomId } = req.body;
      const { recieverId } = req.params;
      const response = await sendVideocallUseCase(dependencies).executeFunction(
        recieverId,
        senderId,
        roomId
      );

      if (response.status) {
        res.status(200).json(response);
      }
    } catch (error) {
      console.log("error in send videocall controller", error);
      res
        .status(500)
        .json({ status: false, message: "error in send videocall controller" });
    }
  };

  return sendVideoCallController;
};
