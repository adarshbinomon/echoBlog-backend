import { Dependencies } from "../../../utils/dependency.interface";
import { UserData } from "../../../utils/interface";

export const createUserUsecase = (dependencies: Dependencies) => {

  const {
    repository: { postRepository },
  } = dependencies;
  const executeFunction = async (data: UserData) => {
    const response = await postRepository.createUser(data);

    if (!response.status) {
      return { message: "Email invalid", status: false };
    } else {
      return { message: "User created", status: true };
    }
  };

  return { executeFunction };
};
