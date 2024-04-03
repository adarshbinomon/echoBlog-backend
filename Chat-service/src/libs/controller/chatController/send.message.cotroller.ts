import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { sendMessageUsecase },
  } = dependencies;

  const sendMessageController = async (req: Request, res: Response) => {
    try {
      const recieverId = req.params.userId;
      const { senderId, message } = req.body;

      const response = await sendMessageUsecase(dependencies).executeFunction(
        senderId,
        recieverId,
        message
      );
      if(response.status){
        res.status(201).json('message sent successfully')
      }
    } catch (error) {
        console.log('error in send message controller:',error);
        
    }
  };

  return sendMessageController;
};
