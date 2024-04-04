import { Response, Request } from "express";
import { userProducer } from "../../../../events/userProduces";
import { dependencies } from "../../../../utils/dependencies,interface";

export default (dependencies: dependencies) => {
  const {
    useCase: { verifyOtp_useCase },
  } = dependencies;

  const verifyOtp = async (req: Request, res: Response) => {


    const enteredOtp = req.body.enteredOtp;
    const otp = String(req.session.otp);
    const userData = req.session.userData;

    const response = await verifyOtp_useCase(dependencies).executeFunction(
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
      const userDataForResponse = JSON.parse(
        JSON.stringify(response.user.response)
      );
      console.log(userDataForResponse);
       
      delete userDataForResponse.password;
      delete userDataForResponse.isGoogle;
      delete userDataForResponse.__v;
      delete userDataForResponse.uid;

      await userProducer(userDataForResponse, "authTopic", "createUser");
      res.status(201).json({
        status: true,
        accessToken: accessToken,
        user: userDataForResponse,
      });
    } else {
      res.status(400).json({ status: false, message: response.message });
    }
  };

  return verifyOtp;
};
