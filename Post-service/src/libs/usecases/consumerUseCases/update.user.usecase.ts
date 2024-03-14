import { UserData } from "../../../utils/interface";

export const updateUserUsecase = (dependencies: any) => {
  const {
    repository: { postRepository },
  } = dependencies;
  const executeFunction = async (data: UserData) => {
    const response = await postRepository.updateUser(data);

    if (response.status) {
      return { message: "user updated", status: true };
    } else {
      return { message: "update failed", status: false };
    }
  };

  return { executeFunction };
};
