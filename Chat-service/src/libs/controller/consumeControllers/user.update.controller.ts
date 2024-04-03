import { Request, Response } from "express";
import { UserData } from "../../../utils/interface";
import { dependencies } from "../../../utils/dependencies,interface";

export const updateUserController = async (dependencies: dependencies,data: UserData) => {
  const {
    consumeUsecase: { updateUserUsecase },
  } = dependencies;
  
  const response = await updateUserUsecase(dependencies)?.executeFunction(data);
};
 