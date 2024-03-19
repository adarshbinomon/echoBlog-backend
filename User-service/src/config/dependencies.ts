import { userRepository } from "../libs/app/repository";
import {
  saveUserData_useCase,
  editUserProfile_useCase,
  getUser_useCase,
  findAllUsers_useCase,
} from "../libs/usecases";
import { createUserUsecase } from "../libs/usecases/consumerUsecases";

const useCase: any = {
  saveUserData_useCase,
  getUser_useCase,
  editUserProfile_useCase,
  findAllUsers_useCase,
};

const repository: any = {
  userRepository,
};

const consumeUsecase: any = {
  createUserUsecase,
};

export default {
  repository,
  useCase,
  consumeUsecase,
};
