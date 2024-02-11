import express from "express";
import cors from "cors";
import dependancies from './config/dependancies'
import { routes } from './router'
import dotenv from "dotenv";
dotenv.config({ path: "src/.env" });

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));

app.use('/api', routes(dependancies));

export { app };
