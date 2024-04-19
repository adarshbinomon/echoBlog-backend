import { schema } from "../database";
const { User, Message, Conversation } = schema;
import { io } from "../../../app";
import { getRecieverSocketId } from "../../../socket/socket";

export default {
  sendMessage: async (
    senderId: string,
    recieverId: string,
    message: string
  ) => {
    try {
      const conversation = await Conversation.findOne({
        participants: { $all: [senderId, recieverId] },
      });
      console.log("Enter");

      const recieverSocketId = getRecieverSocketId(recieverId);
      console.log(recieverSocketId, "recieverSocketId");

      if (!conversation) {
        const newConversation = await Conversation.create({
          participants: [senderId, recieverId],
        });
        const newMessage = new Message({
          senderId,
          recieverId,
          message,
        });

        if (newMessage) {
          newConversation.messages.push(newMessage._id);
          console.log(recieverSocketId, "recieverSocketId");

          if (recieverSocketId) {
            io.to(recieverSocketId).emit("newMessage", newMessage);
          }
        }

        const [savedConversation, savedMessage] = await Promise.all([
          newConversation.save(),
          newMessage.save(),
        ]);

        if (savedConversation && savedMessage) {
          return {
            status: true,
            message: "message saved",
            response: { savedConversation, savedMessage },
          };
        } else {
          return { status: false, message: "message save failed" };
        }
      } else {
        const newMessage = new Message({
          senderId,
          recieverId,
          message,
        });
        console.log(newMessage, "newMessage");

        if (newMessage) {
          conversation.messages.push(newMessage._id);
          if (recieverSocketId) {
            console.log(recieverSocketId, "recieverSocketId");
            io.to(recieverSocketId).emit("newMessage", newMessage);
          }
        }

        const savedMessage = await newMessage.save();
        const savedConversation = await conversation.save();

        if (savedMessage) {
          return {
            status: true,
            message: "message saved",
            response: { savedMessage },
          };
        } else {
          return { status: false, message: "message save failed" };
        }
      }
    } catch (error) {
      console.error("Error in sendMessage:", error);
      return { status: false, message: "message save failed" };
    }
  },

  getMessages: async (senderId: string, recieverId: string) => {
    try {
      const conversation = await Conversation.findOne({
        participants: { $all: [senderId, recieverId] },
      })
        .populate("messages")
        .populate("participants");
      if (conversation) {
        console.log(conversation);
        
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

  getConversations: async (userId: string) => {
    try {
      const conversations = await Conversation.find({
        participants: userId,
      }).populate("participants");

      if (conversations) {
        return { status: true, message: "conversations found", conversations };
      } else {
        return { status: false, message: "error in finding conversation" };
      }
    } catch (error) {
      return { status: false, message: "error in finding conversation" };
    }
  },
};
