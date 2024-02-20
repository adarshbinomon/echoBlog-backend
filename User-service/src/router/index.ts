import userRouter from "./user/user.router";
import express from "express";

export const routes = (dependencies: any) => {
  const routes = express.Router();

  routes.use("/user", userRouter(dependencies));
  return routes
};
