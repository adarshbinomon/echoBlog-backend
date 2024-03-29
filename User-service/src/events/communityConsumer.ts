import { kafka } from "../config/kafkaClient";
import { createUserController } from "../libs/controller/consumeControllers";
import { joinCommunityController } from "../libs/controller/consumeControllers/join.community.controller";

const consumer = kafka.consumer({
  groupId: "user-service1",
});

export const communityConsumer = async (dependencies: any) => {
  try {
    console.log("community to user consumer");

    await consumer.connect();
    await consumer.subscribe({ topic: "communityTopic", fromBeginning: true });
    await consumer.run({
      eachMessage: async ({ message }) => {
        try {
          console.log("tryy");

          const binaryData: any = message.value;
          const jsonString: string = binaryData?.toString();
          const jsonData = JSON.parse(jsonString);
          const messageType = jsonData?.type;
          console.log(jsonData);

          if (messageType === "joinCommunity") {
            await joinCommunityController(dependencies, jsonData.data);
            console.log("success");
          } else {
            console.log("Unhandled message type:", messageType);
          }
        } catch (error) {
          console.error("Error processing message:", error);
        }
      },
    });
  } catch (error) {
    console.error("Error in community consumer", error);
  }
};
