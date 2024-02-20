import authenticationRouter from "./auhtentication/auhtention.router";
import adminAuthenticationRouter from './auhtentication/admin.authentication.router'
import express from "express";

export const routes = (dependencies: any) => {
  const routes = express.Router();

  routes.use("/auth/user", authenticationRouter(dependencies));
  routes.use("/auth/admin", adminAuthenticationRouter(dependencies));
  return routes;
};
