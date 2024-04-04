import { userRepository } from "../libs/app/repository";
import {
  saveUserData_useCase,
  editUserProfile_useCase,
  getUser_useCase,
  findAllUsers_useCase,
  savePost_useCase,
  followUser_useCase,
  findAllUsersAdmin_useCase,
  changeUserStatus_useCase,
  getCommunityMembers_useCase,
  searchUserUsecase,
} from "../libs/usecases";
import {
  createUserUsecase,
  joinCommunity_useCase,
} from "../libs/usecases/consumerUsecases";

const useCase: any = {
  saveUserData_useCase,
  getUser_useCase,
  editUserProfile_useCase,
  findAllUsers_useCase,
  savePost_useCase,
  followUser_useCase,
  findAllUsersAdmin_useCase,
  changeUserStatus_useCase,
  getCommunityMembers_useCase,
  searchUserUsecase,
};

const repository: any = {
  userRepository,
};

const consumeUsecase: any = {
  createUserUsecase,
  joinCommunity_useCase,
};

export default {
  repository,
  useCase,
  consumeUsecase,
};
