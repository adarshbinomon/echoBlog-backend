import { hashPassword } from "../../../helper";

interface userData {
  namne: string;
  email: string;
  phone: string;
  password: string;
}

export const addUser_useCases = (dependancies: any) => {
  const {
    repository: { authenticationRepository },
  } = dependancies;

  const executeFunction = async (data: userData) => {
    try {
      const userExist = await authenticationRepository?.userEmailExist(
        data?.email
      );

      if (userExist) {
        return { status1: true, message: "user already exists" };
      }

      console.log("data", data);

      const hashedPassword = await hashPassword(data.password);
      const updatedData = { ...data, password: hashedPassword };
      const addUserData = await authenticationRepository?.createUser(
        updatedData
      );
      if (addUserData.status) {
        return { status: true, user: addUserData };
      } else {
        return { status: false, message: "user creation failed" };
      }
    } catch (error) {
      return {
        status: false,
        message: "an erorr occured while creating user",
      };
    }
  };
  return { executeFunction };
};
