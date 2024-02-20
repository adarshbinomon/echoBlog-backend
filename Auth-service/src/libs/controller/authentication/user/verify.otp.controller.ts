import { Response, Request } from "express";
import { userProducer } from "../../../../events/userProduces";

export default (dependencies: any) => {
  const {
    useCase: { verifyOtp_useCase },
  } = dependencies;

  const verifyOtp = async (req: Request, res: Response) => {
    console.log("verifyotpcontroller");
    console.log(req.body);

    const enteredOtp = req.body.enteredOtp;
    const otp = String(req.session.otp);
    const userData = req.session.userData;

    const response = await verifyOtp_useCase(dependencies).executeFunction(
      userData,
      otp,
      enteredOtp
    );
    // console.log(response)
    if (response.status) {
      const { user, accessToken, refreshToken } = response;
      req.session.refreshToken = refreshToken;
      const expirationDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
      res.cookie("accessToken", accessToken, {
        expires: expirationDate,
        httpOnly: true,
        secure: true,
      });
      const userDataForResponse = {
        _id: response.user.response._id,
        name: response.user.response.name,
        email: response.user.response.email,
        phone: response.user.response.phone || "",
        profilePicture: response.user.response.profilePicture || "",
        isGoogle: response.user.response.isGoogle,
      };
      await userProducer(userDataForResponse, 'authTopic', 'createUser');
      res
        .status(201)
        .json({ status: true, accessToken: accessToken, user: userDataForResponse });
    } else {
      res.status(400).json({ status: false, message: response.message });
    }
  };

  return verifyOtp;
};
