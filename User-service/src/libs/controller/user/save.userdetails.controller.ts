import { Request, Response } from "express";
import { userProducer } from "../../../events/userUpdateProducer";
import { dependencies } from "../../../utils/interfaces/dependency.interface";

export default (dependencies: dependencies) => {
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
      console.log("user data added to user :", response);

      if (response.status) {
        await userProducer(response.user, "userTopic", "updateUser");
        res
          .status(201)
          .json({ status: true, message: "user-details saved successfully" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ status: false, message: "failed to save user details" });
    }
  };
  return saveUserDataController;
};
