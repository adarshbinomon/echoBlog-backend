import { Request, Response } from "express";
import { UserData } from "../../../utils/interfaces/interfaces";

export const createUserController = async (dependencies: any, data: UserData) => {
  const {
    consumeUsecase: { createUserUsecase },
  } = dependencies;
  const response = await createUserUsecase(dependencies).executeFunction(data);
};
