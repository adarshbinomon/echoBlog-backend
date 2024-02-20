import save_userData_controller from "./save.userdetails.controller";

export default (dependencies: any) => {
  return {
    saveUserDataController: save_userData_controller(dependencies),
  };
};
