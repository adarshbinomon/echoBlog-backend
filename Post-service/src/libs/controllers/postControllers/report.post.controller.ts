import { Request, Response } from "express";
import { Dependencies } from "../../../utils/dependency.interface";

export default (dependencies: Dependencies) => {
  const {
    useCase: { reportPostUseCase },
  } = dependencies;

  const reportPostController = async (req: Request, res: Response) => {
    try {
      const reportObject = req.body;
      const { postId } = req.params;

      const response = await reportPostUseCase(dependencies).executeFunction(
        postId,
        reportObject
      );

      if (response.status) {
        res.status(201).json({ status: true, message: response.message });
      } else {
        res.status(500).json({ status: true, message: response.message });
      }
    } catch (error) {
      res.status(500).json({ status: true, message: "error i reporting post" });
    }
  };
  return reportPostController;
};
