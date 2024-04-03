import sendMessageController from "./send.message.cotroller";
import getMessagesController from "./get.messages.controller";

export default (dependencies: any) => {
  return {
    sendMessageController: sendMessageController(dependencies),
    getMessagesController: getMessagesController(dependencies)
  };
};
