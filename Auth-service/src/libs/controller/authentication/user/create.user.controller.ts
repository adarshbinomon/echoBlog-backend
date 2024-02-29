import { Response, Request } from "express";

export default (dependencies: any) => {
  const {
    useCase: { addUser_useCases },
  } = dependencies;

  const createUserController = async (req: Request, res: Response) => {
    // console.log(req.body);
    const data = {
      ...req.body,
      profilePicture: "",
      uid: "",
      isGoogle: false,
    };

    console.log("data");
    console.log(data);

    const response = await addUser_useCases(dependencies).executeFunction(data);

    req.session.otp = response.otp;
    req.session.userData = response.user;

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
