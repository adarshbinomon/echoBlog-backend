import createPost_controller from "./create.post.controller";
import getUserPosts_controller from "./get.user.posts.controller.";
import getPost_Controller from "./get.post.controller";
import editPost_controller from "./edit.post.controller";
import deletePost_controller from "./delete.post.controller";
import getAllPosts_Controller from "./get.all.posts.controller";
import likePost_Controller from "./like.post.controller";
import addComment_controller from './add.comment.controller'

export default (dependencies: any) => {
  return {
    createPostController: createPost_controller(dependencies),
    getUserPostsController: getUserPosts_controller(dependencies),
    getPostController: getPost_Controller(dependencies),
    editPostController: editPost_controller(dependencies),
    deletePostController: deletePost_controller(dependencies),
    getAllPostsController: getAllPosts_Controller(dependencies),
    likePostController: likePost_Controller(dependencies),
    addCommentController: addComment_controller(dependencies)
  };
};
