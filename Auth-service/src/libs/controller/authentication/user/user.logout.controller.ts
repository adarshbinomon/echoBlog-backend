import { Request, Response } from "express";
import { clearAccessTokenFromCookie } from "../../../../utils/jwt";

export default (dependencies: any) => {
  const userLogoutController = (req: Request, res: Response) => {
    try {
      clearAccessTokenFromCookie("accessToken", res);
      res.clearCookie("accessToken");
      req.session.userData = undefined;

      res.json({ status: true, message: "Logout success" });
    } catch (error) {
      console.log("err", error);
      res.json(error);
    }
  };
  return userLogoutController;
};
