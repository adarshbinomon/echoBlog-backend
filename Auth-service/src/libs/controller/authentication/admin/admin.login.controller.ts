import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { adminLogin_useCase },
  } = dependencies;

  const adminLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const response = await adminLogin_useCase(dependencies).executeFunction(
      email,
      password
    );
    // console.log(response);
    

    if (response.status) {
      const { user, adminAccessToken, adminRefreshToken } = response;
      req.session.adminRefreshToken = adminRefreshToken;
      const expirationDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
      res.cookie("adminAccessToken", adminAccessToken, {
        expires: expirationDate,
        httpOnly: true,
        secure: true,
      });
      res
        .status(201)
        .json({ status: true, accessToken: adminAccessToken, user: user });
    } else {      
      res.status(400).json({ status: false, message: response.message });
    }
  };

  return adminLogin;
};
