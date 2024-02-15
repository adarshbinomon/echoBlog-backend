import { hashPassword, sendMail } from "../../../helper";

interface userData {
  name: string;
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

      const hashedPassword = await hashPassword(data.password);
      const updatedData = { ...data, password: hashedPassword };
      
      const otp = await sendMail(updatedData.email,updatedData.name)
      console.log(otp);
      
      if(otp){
          return {status: true, user: updatedData, message: `otp sent to ${updatedData.email}`, otp: otp}
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
