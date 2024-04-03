export const sendMessageUsecase = (dependencies: any) => {
  const {
    repository: { chatRepository },
  } = dependencies;

  const executeFunction = async (
    senderId: string,
    recieverId: string,
    message: string
  ) => {
    try {
      const response = await chatRepository.sendMessage(
        senderId,
        recieverId,
        message
      );

      if (response.status) {
        return {
          status: true,
          message: response.message,
          response: response.response,
        };
      } else {
        return { status: false, message: response.message };
      }
    } catch (error) {
      console.log("error in sendmessage usecase:", error);
      return { status: false, message: "error in sendmessage usecase" };
    }
  };
  return { executeFunction };
};
