import { Request, Response } from "express";
import { UserData } from "../../../utils/interface";

export const createUserController = async (
  dependencies: any,
  data: UserData
) => {
  const {
    consumeUsecase: { createUserUsecase },
  } = dependencies;
  const response = await createUserUsecase(dependencies).executeFunction(data);
};
