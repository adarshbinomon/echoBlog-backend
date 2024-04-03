import chatRouter from "./chat/chat.router";
import express from "express";

export const routes = (dependencies: any) => {
  const routes = express.Router();

  routes.use("/chat", chatRouter(dependencies));
  return routes;
};
