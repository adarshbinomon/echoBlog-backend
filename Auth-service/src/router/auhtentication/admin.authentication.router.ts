import express from "express";
import { profileController } from "../../libs/controller";

export default (dependencies: any) => {
  const router = express();

  const { adminLoginController } = profileController(dependencies);

  router.post("/login", adminLoginController);

  return router;
};
