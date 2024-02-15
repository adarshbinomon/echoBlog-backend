import create_user_controller from "./create.user.controller";
import verify_otp_controller from "./verify.otp.controller";
import login_user_controller from './login.user.controller'

export default (dependencies: any) => {
  return {
    createUserController: create_user_controller(dependencies),
    verifyOtpController: verify_otp_controller(dependencies),
    loginUserController: login_user_controller(dependencies)
  };
};
