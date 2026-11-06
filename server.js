import express from "express";
import jwt from "jsonwebtoken";
import usuarios from "./usuarios.js";

const app = express();
const PORT = process.env;
const app = express();
app.use(express.json());
