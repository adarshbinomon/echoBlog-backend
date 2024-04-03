import express from "express";
import { chatController } from "../../libs/controller";

export default (dependencies: any) => {
  const router = express();  

  const { sendMessageController,getMessagesController } = chatController(dependencies);

  router.post("/:userId", getMessagesController);
  router.post("/send/:userId", sendMessageController);

  return router;
};
