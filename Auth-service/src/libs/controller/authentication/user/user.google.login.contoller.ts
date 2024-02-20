import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { userGoogleLogin_useCase },
  } = dependencies;

  const googleLogin = async (req: Request, res: Response) => {
    const { name, email, uid, isGoogle, profile } = req.body;

    const data = {
      name: name,
      email: email,
      uid: uid,
      isGoogle: isGoogle,
      profilePicture: profile,
      password: "",
      phone: "",
    };

    const response = await userGoogleLogin_useCase(
      dependencies
    ).executeFunction(data);

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
        .status(200)
        .json({ status: true, accessToken: accessToken, user: user });
    } else {
      res.status(400).json({ status: false, message: response.message });
    }
  };
  return googleLogin;
};
