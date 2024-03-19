import save_userData_controller from "./save.userdetails.controller";
import get_user_controller from "./get.user.controller";
import edit_userProfile_controller from "./edit.user.profile.controller";
import find_all_users_controller from "./find.all.user.controller";

export default (dependencies: any) => {
  return {
    saveUserDataController: save_userData_controller(dependencies),
    getUserController: get_user_controller(dependencies),
    editUserProfileController: edit_userProfile_controller(dependencies),
    findAllUsersController: find_all_users_controller(dependencies),
  };
};
