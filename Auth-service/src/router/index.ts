import authenticationRouter from "./auhtentication/auhtention.router";
import express from "express";

export const routes = (dependancies: any) => {
  const routes = express.Router();

  routes.use("/auth/user", authenticationRouter(dependancies));
  return routes;
};
