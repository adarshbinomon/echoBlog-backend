import { Dependencies } from "../../../utils/dependency.interface";
import { Request, Response } from "express";

export default (dependencies: Dependencies) => {
  const {
    useCase: { getMonthlyPostCountUseCase },
  } = dependencies;

  const getMonthlyPostCountController = async (req: Request, res: Response) => {
    try {
      const monthlyPostCount = await getMonthlyPostCountUseCase(
        dependencies
      ).executeFunction();
    //   console.log(monthlyPostCount.postsPerMonth);

      if (monthlyPostCount) {
        res.status(200).json(monthlyPostCount);
      }
    } catch (error) {
      console.log("error in get getMonthlyPostCountController ", error);
      res
        .status(404)
        .json({ status: false, message: "error in finding posts" });
    }
  };
  return getMonthlyPostCountController;
};
