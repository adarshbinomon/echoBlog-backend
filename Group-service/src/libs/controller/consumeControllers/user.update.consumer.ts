import { Request, Response } from "express";
import { UserData } from "../../../utils/interface";

export const updateUserController = async (
  dependencies: any,
  data: UserData
) => {
  const {
    consumeUsecase: { updateUserUsecase },
  } = dependencies;
  console.log("data:", data);

  const response = await updateUserUsecase(dependencies)?.executeFunction(data);
  console.log('response:' , response);
  
};
