import { Router } from "express";
import UserController from "../controller/user.controller.js";

const userRouter = Router();

// Get All Users
userRouter.get("/", UserController.getAllUsers);

// Get User By Id
userRouter.get("/:id", UserController.getUserById);

// Create User
userRouter.post("/", UserController.createUser);

// Update User
userRouter.put("/:id", UserController.updateUser);

// Delete User
userRouter.delete("/:id", UserController.deleteUser);

// Login User
userRouter.post("/login", UserController.loginUser);

export default userRouter;
