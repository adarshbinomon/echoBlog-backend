import { Request, Response } from "express";
import { Dependencies } from "../../../../utils/dependencies.interface";

export default (dependencies: Dependencies) => {
  const {
    useCase: { forgotPasswordUsecase },
  } = dependencies;

  const forgotPasswordController = async (req: Request, res: Response) => {
    try {
      const { email } = req.body;
      

      const response = await forgotPasswordUsecase(
        dependencies
      ).executeFunction(email);

      if (response.status) {
        req.session.otp = response.otp;
        req.session.email = email

        res.status(200).json({ success: true, message: response.message });
      } else {
        res.status(500).json({ success: false, message: response.message });
      }
    } catch (error) {
      console.error("Error in sending OTP:", error);
      res.status(500).json({ success: false, message: "Error in sending OTP" });
    }
  };

  return forgotPasswordController;
};
