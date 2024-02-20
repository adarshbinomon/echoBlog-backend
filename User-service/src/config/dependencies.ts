import { userRepository } from "../libs/app/repository";
import { saveUserData_useCase } from "../libs/usecases";
import { createUserUsecase } from "../libs/usecases/consumerUsecases";

const useCase: any ={
    saveUserData_useCase
}

const repository: any = {
  userRepository,
};

const consumeUsecase:any={
    createUserUsecase
}

export default {
  repository,
  useCase,
  consumeUsecase
};
