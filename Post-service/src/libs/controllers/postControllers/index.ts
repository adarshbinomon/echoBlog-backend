import createPost_controller from "./create.post.controller";
import getUserPosts_controller from "./get.user.posts.controller.";
import getPost_Controller from "./get.post.controller";
import editPost_controller from "./edit.post.controller";

export default (dependencies: any) => {
  return {
    createPostController: createPost_controller(dependencies),
    getUserPostsController: getUserPosts_controller(dependencies),
    getPostController: getPost_Controller(dependencies),
    editPostController: editPost_controller(dependencies),
  };
};
