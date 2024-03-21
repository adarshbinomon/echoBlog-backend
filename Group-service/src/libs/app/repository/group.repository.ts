import { CommunityData } from "../../../utils/interface";
import { schema } from "../database";

const { Community } = schema;

export default {
  createCommunity: async (data: CommunityData) => {
    try {
      const response = await schema.Community.create(data);
      console.log(response);
      

      if (response) {
        return {
          status: true,
          message: "community created",
          community: response,
        };
      } else {
        return {
          status: false,
          message: "community created",
          community: response,
        };
      }
    } catch (error) {
      console.log("error in create comminity repository:", error);
      return {
        status: false,
        message: "errror in creating community",
      };
    }
  },
};
