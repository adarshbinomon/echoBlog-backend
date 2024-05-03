import { Dependencies } from "../../../utils/dependencies.interface";

export const getConversationsUsecase = (dependencies: Dependencies) => {
  const {
    repository: { chatRepository },
  } = dependencies;

  const executeFunction = async (following: string[]) => {
    try {
      const conversations = await chatRepository.getConversations(following);

      if (conversations.status) {
        return { conversations };
      } else {
        return { conversations };
      }
    } catch (error) {
      return { status: false, message: "error in get conversations usecase" };
    }
  };
  return { executeFunction };
};
