import express from "express";
import { profileController } from "../../libs/controller";

export default (dependancies: any) => {
  const router = express();
  const { createUserController } = profileController(dependancies);

  router.post("/signup", createUserController);

  return router;
};
