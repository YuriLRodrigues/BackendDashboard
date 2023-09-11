import express from "express";
import dotenv from 'dotenv'

const app = express()

app.use(express.json())
// app.use()
dotenv.config()

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Rodando na porta ${port}`))