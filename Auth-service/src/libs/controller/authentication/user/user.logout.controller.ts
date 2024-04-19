import { Request, Response } from "express";
import { clearAccessTokenFromCookie } from "../../../../utils/jwt";
import { Dependencies } from "../../../../utils/dependencies.interface";

export default (dependencies: Dependencies) => {
  const userLogoutController = (req: Request, res: Response) => {
    try {
      clearAccessTokenFromCookie("accessToken", res);
      clearAccessTokenFromCookie("refreshToken", res);
      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");
      req.session.userData = undefined;

      res.json({ status: true, message: "Logout success" });
    } catch (error) {
      console.log("err", error);
      res.json(error);
    }
  };
  return userLogoutController;
};
