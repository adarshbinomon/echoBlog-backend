import { Dependencies } from "../utils/dependencies.interface";
import chatRouter from "./chat/chat.router";
import express from "express";

export const routes = (dependencies: Dependencies) => {
  const routes = express.Router();

  routes.use("/chat", chatRouter(dependencies));
  return routes;
};
