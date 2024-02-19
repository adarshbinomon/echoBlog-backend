import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { adminLogin_useCase },
  } = dependencies;

  const adminLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(req.body);
    console.log('resnse');

    const response = await adminLogin_useCase(dependencies).executeFunction(
      email,
      password
    );
    console.log(response.message);
    

    if (response.status) {
      const { user, accessToken, refreshToken } = response;
      req.session.adminRefreshToken = refreshToken;
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

  return adminLogin;
};
