import { UserData } from "../../../utils/interface";

export const createUserUsecase = (dependencies: any) => {
  console.log("55createUserUsecase");

  const {
    repository: { communityRepository },
  } = dependencies;
  const executeFunction = async (data: UserData) => {
    const response = await communityRepository.createUser(data);

    if (!response.status) {
      return { message: "Email invalid", status: false };
    } else {
      return { message: "User created", status: true };
    }
  };

  return { executeFunction };
};
