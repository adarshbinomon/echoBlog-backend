import { communityRepository } from "../libs/app/repository";
import { createCommunity_usecase } from "../libs/usecase";

const useCase: any = {
  createCommunity_usecase,
};

const consumeUsecase: any = {};

const repository: any = {
  communityRepository
};

export default {
  useCase,
  consumeUsecase,
  repository,
};
