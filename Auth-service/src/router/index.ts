import authenticationRouter from "./auhtentication/auhtention.router";
import adminAuthenticationRouter from './auhtentication/admin.authentication.router'
import express from "express";

export const routes = (dependancies: any) => {
  const routes = express.Router();

  routes.use("/auth/user", authenticationRouter(dependancies));
  routes.use("/auth/admin", adminAuthenticationRouter(dependancies));
  return routes;
};
