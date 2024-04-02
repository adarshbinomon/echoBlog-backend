import createCommunity_controller from "./create.community.controller";
import getCommunity_controller from "./get.community.controller";
import getAllCommunities_controller from "./get.all.communities.controller";
import joinCommunity_controller from "./join.community.controller";
import getUserCommunities_controller from "./get.user.community.controller";
import editCommunity_controller from "./edit.community.controller";

export default (dependencies: any) => {
  return {
    createCommunityController: createCommunity_controller(dependencies),
    getCommunityController: getCommunity_controller(dependencies),
    getAllCommunityController: getAllCommunities_controller(dependencies),
    joinCommunityController: joinCommunity_controller(dependencies),
    getUserCommunitiesController: getUserCommunities_controller(dependencies),
    editCommunityController: editCommunity_controller(dependencies)
  };
};
