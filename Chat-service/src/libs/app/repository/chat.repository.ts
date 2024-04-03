import { schema } from "../database";
const { User, Message, Conversation } = schema;

export default {
  sendMessage: async (
    senderId: string,
    recieverId: string,
    message: string
  ) => {
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }
    const newMessage = new Message({
      senderId,
      recieverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    const response = await Promise.all([
      conversation.save(),
      newMessage.save(),
    ]);

    if (response) {
      return { status: true, message: "message saved", response: response };
    } else {
      return { status: false, message: "message save failed" };
    }
  },

  getMessages: async (senderId: string, recieverId: string) => {
    try {
      const conversation = await Conversation.findOne({
        participants: { $all: [senderId, recieverId] },
      }).populate("messages");
      if (conversation) {
        return {
          status: true,
          message: "conversation found",
          conversation: conversation,
        };
      } else {
        return {
          status: false,
          message: "conversation not found",
        };
      }
    } catch (error) {
      console.log("error in finding conversation repository:", error);
      return { status: false, message: "error in finding conversation" };
    }
  },
};
