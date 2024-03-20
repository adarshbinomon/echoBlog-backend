import { CommentObject, UserData } from "../../../utils/interface";
import { schema } from "../database";
import { PostData } from "../../../utils/interface";

const { User, Post } = schema;

export default {
  createUser: async (data: UserData) => {
    try {
      const userData = { ...data };

      const response = await schema.User.create(userData);
      console.log(response, "res");

      if (response) {
        return { status: true, message: "user created sucessfully", response };
      } else {
        return { status: false, message: "user creation failed" };
      }
    } catch (error) {
      console.log(
        "Error in the creating user in the post service / repository ",
        error
      );
    }
  },

  createPost: async (data: PostData) => {
    try {
      const post = { ...data, createdOn: Date.now() };
      console.log("post");
      console.log(post);

      const response = await schema.Post.create(post);
      console.log("sdfs");

      console.log("response", response);

      if (response) {
        return {
          status: true,
          message: "Post created successfully",
          post: response,
        };
      } else {
        return {
          status: false,
          message: "error in post service repository - createPost-1 ",
        };
      }
    } catch (error) {
      console.log(error, "error in post service repository- createPost");
      return {
        status: false,
        message: "error in post service repository - createPost ",
      };
    }
  },

  findPosts: async (id: string) => {
    try {
      const response = await schema.Post.find({ createdBy: id }).populate(
        "createdBy"
      );
      if (response) {
        return { status: true, message: "posts found", posts: response };
      } else {
        return { status: false, message: "posts not found" };
      }
    } catch (error) {
      console.log("error in find post repository", error);

      return { status: false, message: "posts not found" };
    }
  },

  getPost: async (id: string) => {
    try {
      // console.log(id);
      const response = await schema.Post.findById(id);
      // console.log(response);

      if (response) {
        return { status: true, message: "post found", post: response };
      } else {
        return { status: false, message: "post not found" };
      }
    } catch (error) {
      console.log("error in find post repository", error);

      return { status: false, message: "post not found" };
    }
  },

  updateUser: async (data: UserData) => {
    try {
      const response = await User.findByIdAndUpdate(data._id, data);
      return { status: true, updatedUser: response };
    } catch (error) {
      console.log(error);
      return { status: false, message: "update failed" };
    }
  },

  findUser: async (id: UserData) => {
    try {
      console.log(id, "id");

      const response = await User.findById(id);
      return { status: true, user: response };
    } catch (error) {
      return { status: false, message: "user not found" };
    }
  },

  editPost: async (id: string, data: PostData) => {
    try {
      console.log("data:", data);

      const response = await Post.findByIdAndUpdate(id, {
        content: data.content,
      });
      console.log(response);

      return { status: true, updatedPost: response };
    } catch (error) {
      console.log("error in updatePost repository");
      return { status: false, message: "post update failed" };
    }
  },

  deletePost: async (id: string) => {
    try {
      console.log("repo:", id);

      const response = await Post.findByIdAndDelete(id);
      return { status: true, message: "post deleted successfully." };
    } catch (error) {
      console.log("error:", error);
      return { status: false, message: "post deletion failed!" };
    }
  },

  getAllPosts: async () => {
    try {
      const response = await Post.find().populate("createdBy");
      return {
        status: true,
        message: "posts found successfully",
        posts: response,
      };
    } catch (error) {
      return { status: false, message: "post not found" };
    }
  },

  likePost: async (postId: string, userId: string, liked: boolean) => {
    try {
      if (!liked) {
        const response = await Post.findByIdAndUpdate(
          postId,
          {
            $push: { like: userId },
          },
          { new: true }
        );
        return {
          status: true,
          message: "like added",
          likes: response?.like.length,
        };
      } else {
        const response = await Post.findByIdAndUpdate(
          postId,
          {
            $pull: { like: userId },
            new: true,
          },
          { new: true }
        );
        return {
          status: true,
          message: "like removed",
          likes: response?.like.length,
        };
      }
    } catch (error) {
      console.log("error in like post repository:", error);

      return { status: false, message: "like unsuccessfull" };
    }
  },

  addComment: async (postId: string, comment: CommentObject) => {
    try {
      const response = await Post.findByIdAndUpdate(
        postId,
        {
          $push: { comment: comment },
        },
        { new: true }
      );
      return {
        status: true,
        message: "comment added successfully",
        comment: response?.comment,
      };
    } catch (error) {
      console.log("eeror:", error);

      return { status: false, message: "comment add failed" };
    }
  },

  
};
