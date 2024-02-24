import { Response, Request } from "express";

export default (dependencies: any) => {
  const {
    useCase: { addUser_useCases },
  } = dependencies;

  const createUserController = async (req: Request, res: Response) => {
    const { name, email, phone, password } = req.body;
    // console.log(req.body);

    const data = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      profilePicture: "",
      uid: "",
      isGoogle: false,
    };

    const response = await addUser_useCases(dependencies).executeFunction(data);

    req.session.otp = response.otp;
    req.session.userData = response.user;
    // console.log(response);

    if (response.status) {
      res.json({
        status: true,
        message: `otp sent to ${response.user.email}`,
      });
    } else if (response.status1) {
      res.json({
        status1: true,
        message: response.message,
      });
    } else {
      // console.log(response.message);
      res.json({
        status: false,
        message: response.message,
      });
    }
  };
  return createUserController;
};
