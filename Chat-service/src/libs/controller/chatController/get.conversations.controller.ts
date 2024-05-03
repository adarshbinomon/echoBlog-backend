import { Request, Response } from "express";
import { Dependencies } from "../../../utils/dependencies.interface";

export default (dependencies: Dependencies) => {
  const {
    useCase: { getConversationsUsecase },
  } = dependencies;

  const getConversationsController = async (req: Request, res: Response) => {
    try {
      const { following } = req.body;

      const conversations = await getConversationsUsecase(
        dependencies
      ).executeFunction(following);
      

      if (conversations) {
        res.status(200).json(conversations.conversations);
      } else {
        res.status(404).json(conversations.conversations);
      }
    } catch (error) {
      console.error("Error in getConversationsController:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  return getConversationsController;
};
