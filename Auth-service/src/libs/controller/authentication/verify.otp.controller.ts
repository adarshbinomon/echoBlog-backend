import { Response, Request } from "express";

export default (dependancies: any) => {
  const {
    useCase: { verifyOtp_useCase },
  } = dependancies;

  const verifyOtp = async (req: Request, res: Response) => {
    console.log("verifyotpcontroller");
    console.log(req.body);
    
    const enteredOtp = req.body.enteredOtp;
    const otp = String(req.session.otp);
    const userData = req.session.userData;

    const response = await verifyOtp_useCase(dependancies).executeFunction(
      userData,
      otp,
      enteredOtp
    );
    if (response.status) {
      const { user, accessToken, refreshToken } = response;
      req.session.refreshToken = refreshToken;
      const expirationDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
      res.cookie("accessToken", accessToken, {
        expires: expirationDate,
        httpOnly: true,
        secure: true,
      });
      res
        .status(201)
        .json({ status: true, accessToken: accessToken, user: user });
    } else {
      res.status(400).json({ status: false, message: response.message });
    }
  };

  return verifyOtp;
};
