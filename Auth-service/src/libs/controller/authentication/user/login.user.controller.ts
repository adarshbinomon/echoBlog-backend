import { Request, Response } from "express";
import { Dependencies } from "../../../../utils/dependencies.interface";

export default (dependencies: Dependencies) => {
  const {
    useCase: { userLogin_useCase },
  } = dependencies;

  const userLogin = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const response = await userLogin_useCase(dependencies).executeFunction(
        email,
        password
      );
      console.log(response);
      

      if (response.status) {
        const { user, accessToken, refreshToken } = response;
        req.session.refreshToken = refreshToken;
        const expirationDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        res.cookie("accessToken", accessToken, {
          expires: expirationDate,
          httpOnly: true,
          secure: true,
        });
        res.cookie("refreshToken", refreshToken, {
          expires: expirationDate,
          httpOnly: true,
          secure: true,
        });
        res
          .status(200)
          .json({ status: true, accessToken: accessToken, user: user });
      } else {
        res.status(500).json({status:false,message:response.message})
      }
    } catch (error) {
      res.status(400).json({ status: false, message: 'error in user login' });
    }
  };

  return userLogin;
};
