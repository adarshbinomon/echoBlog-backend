import { postRepository } from "../libs/app/repository";
import {
  createPost_UseCase,
  findUserPosts_useCase,
  getPost_useCase,
  editPost_useCase,
  deletePost_useCase,
  getAllPosts_useCase,
  likePost_useCase,
  addComment_Usecase,
  updataPostStatus_useCase,
  getAllPostsAdmin_useCase,
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
  deletePost_useCase,
  getAllPosts_useCase,
  likePost_useCase,
  addComment_Usecase,
  updataPostStatus_useCase,
  getAllPostsAdmin_useCase,
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
