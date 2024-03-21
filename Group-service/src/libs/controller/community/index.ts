import createCommunity_controller from "./create.community.controller";

export default (dependencies: any) => {
  return {
    createCommunityController: createCommunity_controller(dependencies),
  };
};
