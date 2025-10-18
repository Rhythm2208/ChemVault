import jwt from 'jsonwebtoken';
import * as bcrypt from "bcrypt";

export const createAccessToken = (user: { _id: number; email: string }) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1d' as unknown as number,
    });
};

export const createPassword = async (password?: string) => {
    if (!password) return null;
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};
