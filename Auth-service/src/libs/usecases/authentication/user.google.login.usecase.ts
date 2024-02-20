import { createAccessToken, createRefreshToken } from "../../../utils/jwt";

interface UserData {
  name: string;
  email: string;
  phone: string;
  password: string;
  uid: string;
  profilePicture: string;
  isGoogle: boolean;
}

export const userGoogleLogin_useCase = (dependencies: any) => {
  const {
    repository: { authenticationRepository },
  } = dependencies;

  const executeFunction = async (data: UserData) => {
    try {
      console.log("Received data:", data);

      const existingUser = await authenticationRepository?.findUser(data.email);
      

      if (existingUser.status) {
        
        const accessToken = createAccessToken(
          existingUser,
          process.env.ACCESS_SECRET_KEY || "accesssecret",
          process.env.ACCESS_TOKEN_EXPIRY || "1h"
        );
        const refreshToken = createRefreshToken(
          existingUser,
          process.env.REFRESH_SECRET_KEY || "refreshsecret",
          process.env.REFRESH_TOKEN_EXPIRY || "30days"
        );

        return {
          status: true,
          user: existingUser,
          accessToken,
          refreshToken,
          message: "Login using Google success",
        };
      } else {
        const newUser = await authenticationRepository?.createUser(data);
        
        if (newUser?.status) {
          const accessToken = createAccessToken(
            newUser,
            process.env.ACCESS_SECRET_KEY || "accesssecret",
            process.env.ACCESS_TOKEN_EXPIRY || "1h"
          );
          const refreshToken = createRefreshToken(
            newUser,
            process.env.REFRESH_SECRET_KEY || "refreshsecret",
            process.env.REFRESH_TOKEN_EXPIRY || "30days"
          );

          return {
            status: true,
            user: newUser,
            accessToken,
            refreshToken,
            message: "User created and login using Google success",
          };
        }
      }
    } catch (error) {
      console.error("Error in userGoogleLogin_useCase:", error);
      throw error;
    }
  };

  return { executeFunction };
};
