import { Request, Response } from "express";
import Conversation from "../../app/database/schema/conversation.schema";

export default (dependencies: any) => {
  const {
    useCase: { getMessagesUseCase },
  } = dependencies;

  const getMessagesController = async (req: Request, res: Response) => {
    try {
      const recieverId = req.params.userId;
      const { senderId } = req.body;

      const conversation = await getMessagesUseCase(
        dependencies
      ).executeFunction(senderId, recieverId);

      if (conversation.status) {
        res.status(200).json({
          status: true,
          message: conversation.message,
          conversation: conversation.conversation,
        });
      } else {
        res.status(404).json({ status: false, message: conversation.message });
      }
    } catch (error) {
      console.log("error in get messages controller:", error);
      res.status(404).json("Conversation not found");
    }
  };
  return getMessagesController;
};
