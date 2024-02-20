import express from "express";
import { userController } from "../../libs/controller/";
export default (dependencies: any) => {
  const router = express();

  const { saveUserDataController } = userController(dependencies);

  router.post("/user-details", saveUserDataController);

  return router;
};
