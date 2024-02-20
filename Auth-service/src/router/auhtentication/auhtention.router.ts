import express from "express";
import { profileController } from "../../libs/controller";

export default (dependencies: any) => {
  const router = express();

  const { createUserController, verifyOtpController,loginUserController, userGoogleLoginController } =
    profileController(dependencies);

  router.post("/signup", createUserController);
  router.post("/verify-otp", verifyOtpController);
  router.post("/login", loginUserController);
  router.post("/google-login", userGoogleLoginController);

  return router;
};
