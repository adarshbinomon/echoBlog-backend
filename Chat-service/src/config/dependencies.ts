import chatRepository from "../libs/app/repository/chat.repository";
// import { updateUserUsecase } from "../libs/usecases";
import {
  sendMessageUsecase,
  getMessagesUseCase,
  getConversationsUsecase,
} from "../libs/usecases";
import {  Repository, UseCase } from "../utils/dependencies.interface";

const useCase: UseCase = {
  sendMessageUsecase,
  getMessagesUseCase,
  getConversationsUsecase,
};

// const consumeUsecase: any = {updateUserUsecase};

const repository: Repository = { chatRepository };

export default {
  useCase,
  //   consumeUsecase,
  repository,
};
