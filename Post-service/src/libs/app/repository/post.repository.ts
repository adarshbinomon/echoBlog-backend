import { UserData } from "../../../utils/interface";
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
      const response = await schema.Post.find({ createdBy: id });
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
      console.log(id);
      const response = await schema.Post.findById(id);
      console.log(response);
      
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
};
