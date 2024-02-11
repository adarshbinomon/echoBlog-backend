import { Response, Request } from "express";

export default (dependancies: any) => {
  const {
    useCase: { addUser_useCases },
  } = dependancies;

  const createUserController = async (req: Request, res: Response) => {
    const { name, email, phone, password } = req.body;
    console.log("controller");
    

    const data = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };

    const response = await addUser_useCases(dependancies).executeFunction(data);
    console.log(response);

    if (response.status) {
      res.json({
        status: true,
        user: response.user,
        message: "new user created",
      });
    } else if (response.status1) {
      res.json({
        status1: true,
        message: response.message,
      });
    } else {
      console.log(response.message);
      res.json({
        status: false,
        message: response.message,
      });
    }
  };
  return createUserController;
};
