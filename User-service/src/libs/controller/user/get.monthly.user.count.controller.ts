import { Dependencies } from "../../../utils/interfaces/dependency.interface";
import { Request, Response } from "express";

export default (dependencies: Dependencies) => {
  const {
    useCase: { getMonthlyUserCountUseCase },
  } = dependencies;

  const getMonthlyUserCountController = async (req: Request, res: Response) => {
    try {
      const monthlyUserCount = await getMonthlyUserCountUseCase(
        dependencies
      ).executeFunction();
      console.log(monthlyUserCount.postsPerMonth);

      if (monthlyUserCount) {
        res.status(200).json(monthlyUserCount);
      }
    } catch (error) {
      console.log("error in get getMonthlyUserCountController ", error);
      res
        .status(404)
        .json({ status: false, message: "error in finding posts" });
    }
  };
  return getMonthlyUserCountController;
};
