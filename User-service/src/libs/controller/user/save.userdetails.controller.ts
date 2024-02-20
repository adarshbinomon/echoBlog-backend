import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { saveUserData_useCase },
  } = dependencies;

  const saveUserDataController = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      // console.log(data);
      
      const response = await saveUserData_useCase(dependencies).executeFunction(
        data
      );

      if(response.status){
        res.status(201).json({status: true, message: 'user-details saved successfully'})
      }
    } catch (error) {
      res.status(500).json({status: false, message: 'failed to save user details'})
    }
  };
  return saveUserDataController;
};
