import { Request, Response } from "express";
import { Dependencies } from "../../../../utils/dependencies.interface";
import { userProducer } from "../../../../events/userProduces";

export default (dependencies: Dependencies) => {
  const {
    useCase: { userGoogleLogin_useCase },
  } = dependencies;

  const googleLogin = async (req: Request, res: Response) => {
    try {
      const data = { ...req.body };

      const response = await userGoogleLogin_useCase(
        dependencies
      ).executeFunction(data);

      if (response.status) {
        const { user, accessToken, refreshToken } = response;
        console.log("user");
        console.log(accessToken);

        req.session.refreshToken = refreshToken;
        const expirationDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        res.cookie("accessToken", accessToken, {
          expires: expirationDate,
          httpOnly: true,
          secure: true,
        });

        const userDataForResponse = JSON.parse(
          JSON.stringify(response.user.user)
        );
        console.log(userDataForResponse);

        delete userDataForResponse.password;
        delete userDataForResponse.isGoogle;
        delete userDataForResponse.__v;
        delete userDataForResponse.uid;

        await userProducer(userDataForResponse, "authTopic", "createUser");

        res
          .status(200)
          .json({ status: true, accessToken: accessToken, user: user.user });
      } else {
        res.status(400).json({ status: false, message: response.message });
      }
    } catch (error) {
      res.status(400).json({ status: false, message: "error in google login" });
    }
  };
  return googleLogin;
};
