import express from "express";
import { chatController } from "../../libs/controller";
import { verifyUser } from "../../utils/jwt/verify.user";
import { Dependencies } from "../../utils/dependencies.interface";

export default (dependencies: Dependencies) => {
  const router = express();

  const {
    sendMessageController,
    getMessagesController,
    getConversationsController,sendVideoCallController
  } = chatController(dependencies);

  router.post("/get-messages/:userId", getMessagesController);
  router.post("/send/:userId", sendMessageController);
  router.post("/get-conversations", getConversationsController);
  router.post("/videocall/:recieverId",sendVideoCallController );

  return router;
};
