import express from "express";
import { communityController } from "../../libs/controller";

export default (dependencies: any) => {
  const router = express();

  const {
    createCommunityController,
    getCommunityController,
    getAllCommunityController,
    joinCommunityController,
  } = communityController(dependencies);

  router.post("/create-community", createCommunityController);
  router.get("/get-community/:communityId", getCommunityController);
  router.get("/get-all-communities/:userId", getAllCommunityController);
  router.put("/join-community", joinCommunityController);

  return router;
};
