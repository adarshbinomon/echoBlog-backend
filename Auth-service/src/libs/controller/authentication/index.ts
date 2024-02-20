import create_user_controller from "./create.user.controller";
import verify_otp_controller from "./verify.otp.controller";
import login_user_controller from "./login.user.controller";
import admin_login_controller from "./admin/admin.login.controller";
import user_google_login_controller from "./user.google.login.contoller";

export default (dependencies: any) => {
  return {
    createUserController: create_user_controller(dependencies),
    verifyOtpController: verify_otp_controller(dependencies),
    loginUserController: login_user_controller(dependencies),
    adminLoginController: admin_login_controller(dependencies),
    userGoogleLoginController: user_google_login_controller(dependencies),
  };
};
