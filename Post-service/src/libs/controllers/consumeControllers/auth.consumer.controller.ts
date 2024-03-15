import { Request, Response } from "express";
import { UserData } from "../../../utils/interface";

export const createUserController = async (
  dependencies: any,
  data: UserData
) => {
  const {
    consumeUsecase: { createUserUsecase },
  } = dependencies;
  console.log('data:',data);
  const response = await createUserUsecase(dependencies).executeFunction(data);
  console.log('response:',response);
  
};
