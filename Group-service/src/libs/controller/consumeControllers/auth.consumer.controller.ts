import { Request, Response } from "express";
import { UserData } from "../../../utils/interface";
import { dependencies } from "../../../utils/dependencies.interface";

export const createUserController = async (
  dependencies: dependencies,
  data: UserData
) => {
  const {
    consumeUsecase: { createUserUsecase },
  } = dependencies;
  console.log('data:',data);
  const response = await createUserUsecase(dependencies).executeFunction(data);
  console.log('response:',response);
  
};
