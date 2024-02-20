import { userRepository } from "../libs/app/repository";

export const addUser = async (data: any) => {
  const { createUser } = userRepository;

  await createUser(data);
};
