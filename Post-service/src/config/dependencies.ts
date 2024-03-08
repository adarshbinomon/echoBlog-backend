import { postRepository } from "../libs/app/repository";
import { createPost_UseCase, findUserPosts_useCase, getPost_useCase } from "../libs/usecases";
import { createUserUsecase } from "../libs/usecases/consumerUseCases";

const useCase: any = {
  createPost_UseCase,
  findUserPosts_useCase,
  getPost_useCase
};

const repository: any = {
  postRepository,
};

const consumeUsecase: any = {
  createUserUsecase,
};

export default {
  repository,
  useCase,
  consumeUsecase,
};
