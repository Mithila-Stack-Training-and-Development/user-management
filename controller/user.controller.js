import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserController = {
  // Create User
  createUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await UserModel.create({
        name,
        email,
        password: hashedPassword,
      });

      if (!user) {
        return res.status(404).json({ message: "Failed to create user" });
      }
      return res
        .status(201)
        .json({ message: "User created successfully", user });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  // Get All Users
  getAllUsers: async (req, res) => {
    try {
      const users = await UserModel.find();
      if (!users) {
        return res.status(404).json({ message: "No users found" });
      }
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  // Get User By Id
  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UserModel.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  // Update User
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      const user = await UserModel.findByIdAndUpdate(
        id,
        {
          name,
          email,
        },
        {
          new: true,
        }
      );

      if (!user) {
        return res.status(404).json({ message: "Failed to update user" });
      }

      return res
        .status(200)
        .json({ message: "User updated successfully", user });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  //   delete user
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UserModel.findByIdAndDelete(id);
      if (!user) {
        return res.status(404).json({ message: "Failed to delete user" });
      }
      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  //   login user
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await UserModel.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {
          expiresIn: 1000 * 60 * 60 * 24,
        }
      );

      return res
        .status(200)
        .json({ message: "User logged in successfully", token });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

export default UserController;
