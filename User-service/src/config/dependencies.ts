import { userRepository } from "../libs/app/repository";
import { saveUserData_useCase } from "../libs/usecases";
import { createUserUsecase } from "../libs/usecases/consumerUsecases";
import { getUser_useCase } from "../libs/usecases";
import { editUserProfile_useCase } from "../libs/usecases";

const useCase: any = {
  saveUserData_useCase,
  getUser_useCase,
  editUserProfile_useCase,
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
