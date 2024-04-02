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
    addCommentController,
    updatePostStatusAdminController,
    getAllPostsAdminController,
    getUserCommunityPostController,
    getCommunityPostsController,
    replyToCommentController,
  } = postController(dependencies);

  //admin routes

  router.put("/update-post-status/:postId", updatePostStatusAdminController);
  router.get("/all-posts", getAllPostsAdminController);

  //user routes

  router.get("/posts", getAllPostsController);
  router.post("/create", createPostController);
  router.get("/get-posts/:id", getUserPostsController);
  router.get("/:id", getPostController);
  router.put("/edit-post/:id", editPostController);
  router.get("/delete-post/:id", deletePostController);
  router.post("/like-post/:postId", likePostController);
  router.post("/comment-post/:postId", addCommentController);
  router.get(
    "/get-user-community-post/:userId",
    getUserCommunityPostController
  );
  router.get("/get-community-posts/:communityId", getCommunityPostsController);
  router.post("/reply-to-comment/:postId", replyToCommentController);

  return router;
};
