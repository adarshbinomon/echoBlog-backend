import { UserData } from "../../../utils/interfaces/ interfaces";

export const createUserUsecase = (dependencies: any) => {
    console.log("55createUserUsecase");
    
  const {repository: { userRepository }} = dependencies;
  const executeFunction = async (data: UserData) => {
    
    const response = await userRepository.createUser(data);
       console.log(response);
                                               
    if (!response.status) {
      return { message: "Email invalid", status: false };
    } else {
      return { message: "User created", status: true };
    }

  };

  return { executeFunction };
};