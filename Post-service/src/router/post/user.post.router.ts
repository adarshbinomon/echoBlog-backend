import express from "express";
import { postController } from "../../libs/controllers";

export default (dependencies: any) => {
  const router = express();

  const {
    createPostController,
    getUserPostsController,
    getPostController,
    editPostController,
    deletePostController,
    getAllPostsController,
    likePostController,
    addCommentController
  } = postController(dependencies);

  router.get("/posts", getAllPostsController);
  router.post("/create", createPostController);
  router.get("/get-posts/:id", getUserPostsController);
  router.get("/:id", getPostController);
  router.put("/edit-post/:id", editPostController);
  router.get("/delete-post/:id", deletePostController);
  router.post("/like-post/:postId", likePostController);
  router.post("/comment-post/:postId", addCommentController);

  return router;
};
