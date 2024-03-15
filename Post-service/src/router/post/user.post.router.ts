import express from "express";
import { postController } from "../../libs/controllers";

export default (dependencies: any) => {
  const router = express();

  const {
    createPostController,
    getUserPostsController,
    getPostController,
    editPostController,
  } = postController(dependencies);

  router.post("/create", createPostController);
  router.get("/get-posts/:id", getUserPostsController);
  router.get("/:id", getPostController);
  router.put("/edit-post/:id", editPostController);

  return router;
};
