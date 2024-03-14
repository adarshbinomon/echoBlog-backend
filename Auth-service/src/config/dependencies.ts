import { authenticationRepository } from "../libs/app/repository";
import {
  addUser_useCases,
  verifyOtp_useCase,
  userLogin_useCase,
  adminLogin_useCase,
  userGoogleLogin_useCase,
  updateUserUsecase
} from "../libs/usecases";



const useCase: any = {
  addUser_useCases,
  verifyOtp_useCase,
  userLogin_useCase,
  adminLogin_useCase,
  userGoogleLogin_useCase
};

const consumeUsecase: any ={
  updateUserUsecase
}

const repository: any = {
  authenticationRepository,
};

export default {
  useCase,
  consumeUsecase,
  repository,
};
