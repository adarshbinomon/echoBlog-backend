import express from "express";
import { communityController } from "../../libs/controller";

export default (dependencies: any) => {
  const router = express();

  const { createCommunityController } = communityController(dependencies);

  router.post("/create-community", createCommunityController);
  //   router.get("/logout", adminLogoutController);

  return router;
};
