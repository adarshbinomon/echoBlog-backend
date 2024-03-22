import { UserData } from "../../../utils/interface";

export const updateUserUsecase = (dependencies: any) => {
  const {
    repository: { communityRepository },
  } = dependencies;
  const executeFunction = async (data: UserData) => {
    const response = await communityRepository.updateUser(data);

    if (response.status) {
      return { message: "user updated", status: true };
    } else {
      return { message: "update failed", status: false };
    }
  };

  return { executeFunction };
};
