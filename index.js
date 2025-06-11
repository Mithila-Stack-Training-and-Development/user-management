import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

// Database Connection
import dbConnect from "./db/dbConnect.js";
import userRouter from "./route/user.route.js";
dbConnect();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/users", userRouter);

app.listen(5001, () => {
  console.log("Server is running > http://localhost:5001");
});
