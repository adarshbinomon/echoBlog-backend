import { Response, Request } from "express";

export default (dependencies: any) => {
  const {
    useCase: { addUser_useCases },
  } = dependencies;

  const createUserController = async (req: Request, res: Response) => {
    // console.log(req.body);
    const data = {
      ...req.body,
      profilePicture:
        "https://echoblog-images.s3.ap-south-1.amazonaws.com/1709811864797_profilePicture_dummy-profile.png",
      uid: "",
      isGoogle: false,
    };


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
      res.json({
        status: false,
        message: response.message,
      });
    }
  };
  return createUserController;
};
