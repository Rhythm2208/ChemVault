import * as bcrypt from "bcrypt";
import { createAccessToken, createPassword } from "../helpers/user.ts";
import * as UserService from "../services/user.ts";

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    const user: any = await UserService.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const accessToken = createAccessToken({
      _id: user.id,
      email: user.email,
    });

    return res.status(200).json({
      message: "Login successful.",
      user: {
        id: user.id,
        email: user.email,
      },
      token: accessToken,
    });
  } catch (err: any) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export const signup = async (req: any, res: any) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    const existingUser = await UserService.getUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: "User already exists." });
    }

    const hashedPassword = await createPassword(password);

    const newUser: any = await UserService.addUser(email, hashedPassword);

    if (newUser) {
      return res.status(201).json({
        message: "User registered successfully.",
        user: {
          id: newUser.id,
          email: newUser.email,
        },
      });
    } else {
      return res.status(500).json({ message: "Failed to register user." });
    }
  } catch (err: any) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Something went wrong." });
  }
};
