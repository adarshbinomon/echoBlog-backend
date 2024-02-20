import { authenticationRepository } from "../libs/app/repository";
import {
  addUser_useCases,
  verifyOtp_useCase,
  userLogin_useCase,
  adminLogin_useCase,
  userGoogleLogin_useCase
} from "../libs/usecases";

const useCase: any = {
  addUser_useCases,
  verifyOtp_useCase,
  userLogin_useCase,
  adminLogin_useCase,
  userGoogleLogin_useCase
};

const repository: any = {
  authenticationRepository,
};

export default {
  useCase,
  repository,
};
