import { kafka } from "../config/kafkaClient";
import { updateUserController } from "../libs/controllers/consumeControllers";

const consumer = kafka.consumer({
  groupId: "post-service2",
});

export const userUpdateConsumer = async (dependencies: any) => {
  try {
    console.log('userconsumer reached');
    
    await consumer.connect();
    await consumer.subscribe({ topic: "userTopic", fromBeginning: true });
    await consumer.run({
      eachMessage: async ({ message }) => {
        try {
          const binaryData: any = message.value;
          const jsonString: string = binaryData?.toString();
          const jsonData = JSON.parse(jsonString);
          const messageType = jsonData?.type;
          console.log("data from user service", jsonData);

          if (messageType === "updateUser") {            
            await updateUserController(dependencies, jsonData.data);
          } else {
            console.log("Unhandled message type:", messageType);
          }
        } catch (error) {
          console.error("Error processing message:", error);
        }
      },
    });
  } catch (error) {
    console.error("Error in auth consumer", error);
  }
};
