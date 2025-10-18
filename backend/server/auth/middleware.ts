import jwt from "jsonwebtoken";

export const auth = async (req: any, res: any, next) => {
  let token = req?.headers?.authorization;
  if (!token) {
    return res.status(401).send("token not found");
  }
  try {
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      {},
      async (err: any) => {
        if (err) {
          console.log(" 24 err", err);
          return res.status(401).send("unauthorized");
        }
      },
      next()
    );
  } catch (err: any) {
    console.log(err);
    return res.status(400).send("invalid token");
  }
};
