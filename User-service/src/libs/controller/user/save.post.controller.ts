import { Request, Response } from "express";
import { dependencies } from "../../../utils/interfaces/dependency.interface";

export default (depedndencies: dependencies) => {
  const {
    useCase: { savePost_useCase },
  } = depedndencies;

  const savePostController = async (req: Request, res: Response) => {
    try {
      const { userId, postId } = req.body;

      const resposne = await savePost_useCase(depedndencies).executeFunction(
        userId,
        postId
      );
      console.log('response',resposne);
      
      if (resposne.status) {
        res.status(201).json({ status: true, message: "post saved", user: resposne.user });
      }
    } catch (error) {
      console.log("error in save post controller:", error);

      res.status(201).json({ status: true, message: "post saved" });
    }
  };
  return savePostController;
};
