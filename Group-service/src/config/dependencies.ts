import { communityRepository } from "../libs/app/repository";
import {
  createCommunity_usecase,
  getCommunity_useCase,
  getAllCommunities_useCase,
  joinCommunity_useCase,
} from "../libs/usecase";
import {
  createUserUsecase,
  updateUserUsecase,
} from "../libs/usecase/consumerUseCases";

const useCase: any = {
  createCommunity_usecase,
  getCommunity_useCase,
  getAllCommunities_useCase,
  joinCommunity_useCase,
};

const consumeUsecase: any = { createUserUsecase, updateUserUsecase };

const repository: any = {
  communityRepository,
};

export default {
  useCase,
  consumeUsecase,
  repository,
};
