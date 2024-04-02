import { Request, Response } from "express";
import { dependencies } from "../../../../utils/dependencies,interface";

export default (dependencies: dependencies) => {
  const {
    useCase: { resendOtp_useCase },
  } = dependencies;

  const resendOtpController = async (req: Request, res: Response) => {
    console.log('resend');
      
    const userData = req.session.userData;
    console.log('resend',req.session.userData);
    
    const response = await resendOtp_useCase(dependencies).executeFunction(userData);
    if (response.status) {
      req.session.otp = response?.otp
      res.json({
        status: true,
        message: `otp sent to ${response.userData?.email}`,
      });
    } else if (response.status1) {
      res.json({
        status1: true,
        message: response.message,
      });
    } else {
      res.json({
        status: false,
        message: response.message,
      });
    }
  };
  return resendOtpController;
};
