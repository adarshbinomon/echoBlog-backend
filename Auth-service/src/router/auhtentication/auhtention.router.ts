import express from "express";
import { profileController } from "../../libs/controller";
import userLogoutController from "../../libs/controller/authentication/user/user.logout.controller";

export default (dependencies: any) => {
  const router = express();

  const {
    createUserController,
    verifyOtpController,
    loginUserController,
    userGoogleLoginController,
    userLogoutController
  } = profileController(dependencies);

  router.post("/signup", createUserController);
  router.post("/verify-otp", verifyOtpController);
  router.post("/login", loginUserController);
  router.post("/logout", userLogoutController);
  router.post("/google-login", userGoogleLoginController);

  return router;
};
