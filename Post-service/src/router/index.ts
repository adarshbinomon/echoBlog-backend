import userPostRouter from './post/user.post.router'
import express from "express";

export const routes = (dependencies: any) => {
  const routes = express.Router();

  routes.use("/post", userPostRouter(dependencies));
  return routes;
};
