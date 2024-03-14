import { Request, Response } from "express";
import { UserData } from "../../../utils/interface";

export const updateUserController = async (dependencies: any,data: UserData) => {
  const {
    consumeUsecase: { updateUserUsecase },
  } = dependencies;
  
  const response = await updateUserUsecase(dependencies)?.executeFunction(data);
};
 