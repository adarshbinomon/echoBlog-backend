import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { getPost_useCase },
  } = dependencies;

  const getPostController = async (req: Request, res: Response) => {
    const id = req.params.id;
    console.log('id:', id);
    

    const response = await getPost_useCase(dependencies).executeFunction(id);

    if (response.status) {
      res.status(200).json({ status: true, post: response.post });
    } else {
      res.status(404).json({ status: false, message: "error finding post" });
    }
  };
  return getPostController
};
