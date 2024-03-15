import { postRepository } from "../libs/app/repository";
import {
  createPost_UseCase,
  findUserPosts_useCase,
  getPost_useCase,
  editPost_useCase,
} from "../libs/usecases";
import {
  createUserUsecase,
  updateUserUsecase,
} from "../libs/usecases/consumerUseCases";

const useCase: any = {
  createPost_UseCase,
  findUserPosts_useCase,
  getPost_useCase,
  editPost_useCase,
};

const repository: any = {
  postRepository,
};

const consumeUsecase: any = {
  createUserUsecase,
  updateUserUsecase,
};

export default {
  repository,
  useCase,
  consumeUsecase,
};
