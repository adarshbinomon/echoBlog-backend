import express from "express";
import { chatController } from "../../libs/controller";
import { verifyUser } from "../../utils/jwt/verify.user";
import { Dependencies } from "../../utils/dependencies.interface";

export default (dependencies: Dependencies) => {
  const router = express();

  const {
    sendMessageController,
    getMessagesController,
    getConversationsController,
  } = chatController(dependencies);

  router.post("/:userId", getMessagesController);
  router.post("/send/:userId", sendMessageController);
  router.get(
    "/get-conversations/:userId",
    verifyUser,
    getConversationsController
  );

  return router;
};
