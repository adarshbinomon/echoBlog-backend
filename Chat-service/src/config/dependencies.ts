import chatRepository from "../libs/app/repository/chat.repository";
// import { updateUserUsecase } from "../libs/usecases";
import { sendMessageUsecase, getMessagesUseCase } from "../libs/usecases";

const useCase: any = { sendMessageUsecase, getMessagesUseCase };

// const consumeUsecase: any = {updateUserUsecase};

const repository: any = { chatRepository };

export default {
  useCase,
  //   consumeUsecase,
  repository,
};
