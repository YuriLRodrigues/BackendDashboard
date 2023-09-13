import express from "express";
import dotenv from "dotenv";
import { router } from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.use(router);
dotenv.config();

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Rodando na porta ${port}`));
