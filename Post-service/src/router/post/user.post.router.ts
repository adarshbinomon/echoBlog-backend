import express from "express";
import { postController } from "../../libs/controllers";

export default (dependencies: any) => {
  const router = express();

  const { createPostController, getUserPostsController, getPostController } =
    postController(dependencies);

  router.post("/create", createPostController);
  router.get("/get-posts/:id", getUserPostsController);
  router.get("/:id", getPostController);

  return router;
};
