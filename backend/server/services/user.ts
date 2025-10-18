import { User } from "../model/user.ts";

export const getUserByEmail = async (email: any) => {
  return await User.findOne({
    where: {
      email: email,
    },
  });
};

export const addUser = async (email: any, password: any) => {
  return await User.create({ email, password });
};
