import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { userLogin_useCase },
  } = dependencies;

  const userLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(req.body);

    const response = await userLogin_useCase(dependencies).executeFunction(
      email,
      password
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
        .status(200)
        .json({ status: true, accessToken: accessToken, user: user });
    } else {
      res.status(400).json({ status: false, message: response.message });
    }
  };

  return userLogin;
};
