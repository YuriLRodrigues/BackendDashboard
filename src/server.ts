import express from "express";
import dotenv from 'dotenv'
import { router } from "./routes";

const app = express()

app.use(express.json())
app.use(router)
dotenv.config()

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Rodando na porta ${port}`))