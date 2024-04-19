import { Request, Response } from "express";
import { Dependencies } from "../../../utils/dependency.interface";

export default (dependencies: Dependencies) => {
  const {
    useCase: { editPost_useCase },
  } = dependencies;

  const editPostController = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const data = req.body;

      const response = await editPost_useCase(dependencies).executeFunction(
        id,
        data
      );

      if (response.status) {
        res
          .status(201)
          .json({ status: true, message: "post updated successfully" });
      } else {
        res
          .status(500)
          .json({ status: false, message: "post update unsuccessful" });
      }
    } catch (error) {
      console.log(error);

      res
        .status(500)
        .json({ status: false, message: "post update unsuccessful" });
    }
  };
  return editPostController;
};
