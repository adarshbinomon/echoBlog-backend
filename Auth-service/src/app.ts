import express from "express";
import cors from "cors";
import dependancies from "./config/dependancies";
import { routes } from "./router";
import session, { MemoryStore, SessionOptions } from "express-session";
import dotenv from "dotenv";
dotenv.config({ path: "src/.env" });

const app = express();

const store = new MemoryStore();
declare module "express-session" {
  interface Session {
    userData: {
      _id: string;
      name: string;
      email: string;
      password: string;
    },
    otp: string,
    refreshToken: string,
    adminRefreshToken: string
  }
}

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SECRET || "default-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 60 * 60 * 1000,
      httpOnly: true,
    },
    store: store,
  } as SessionOptions)
);

app.use(express.urlencoded({ extended: true }));

app.use("/api", routes(dependancies));

export { app };
