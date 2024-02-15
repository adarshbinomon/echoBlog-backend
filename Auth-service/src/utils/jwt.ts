import jwt from "jsonwebtoken";

export const createAccessToken = (
  user: any,
  accessTokenSecretKey: string,
  expiration: string
) => {
  console.log("acceess token created");
  const token = jwt.sign({ user }, accessTokenSecretKey, {
    expiresIn: expiration,
  });
  return token;
};

export const createRefreshToken = (
  user: any,
  refreshTokenSecretKey: string,
  expiration: string
) => {
  return jwt.sign({ user }, refreshTokenSecretKey, { expiresIn: expiration });
};
