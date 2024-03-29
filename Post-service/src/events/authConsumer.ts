import { kafka } from "../config/kafkaClient";
import { createUserController } from "../libs/controllers/consumeControllers/auth.consumer.controller";

const consumer = kafka.consumer({
  groupId: "post-service",
});

export const userConsumer = async (dependencies: any) => {
  try {
    console.log('auth to post consumer');
    
    
    await consumer.connect();
    await consumer.subscribe({ topic: "authTopic", fromBeginning: true });
    await consumer.run({
      eachMessage: async ({ message }) => {
        try {
          console.log('userConsumer');
          const binaryData: any = message.value;
          const jsonString: string = binaryData?.toString();
          const jsonData = JSON.parse(jsonString);
          const messageType = jsonData?.type;
          console.log(jsonData);
          

          if (messageType === "createUser") {
            console.log('if');
            
            await createUserController(dependencies, jsonData.data);
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
