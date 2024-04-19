import { Request, Response } from "express";
import { Dependencies } from "../../../../utils/dependencies.interface";

export default (dependencies: Dependencies) => {
  const {
    useCase: { verifyForgotPasswordOtp },
  } = dependencies;

  const verifyForgotPasswordOtpController = async (
    req: Request,
    res: Response
  ) => {
    try {
      const { enteredOtp } = req.body;
      console.log(req.body);
      console.log(req.session.otp);

      const response = await verifyForgotPasswordOtp(
        dependencies
      ).executeFunction(
        enteredOtp as number,
        req.session.otp as unknown as number
      );

      if (response.status) {
        res.status(200).json(response);
      } else {
        res.status(500).json(response);
      }
    } catch (error) {
      res.status(500).json({ status: false, message: "Internal server error" });
    }
  };

  return verifyForgotPasswordOtpController;
};
