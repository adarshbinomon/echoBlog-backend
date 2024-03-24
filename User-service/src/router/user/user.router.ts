import express from "express";
import { userController } from "../../libs/controller/";
import {
  uploadProfilePicture,
  uploadCoverPicture,
} from "../../helper/s3Multer";
export default (dependencies: any) => {
  const router = express();

  const {
    saveUserDataController,
    getUserController,
    editUserProfileController,
    findAllUsersController,
    savePostController,
    followUserController,
    findAllUsersAdminController,
    changeUserStatusAdminController,
    getCommunityMembersController,
  } = userController(dependencies);

  router.post("/user-details", saveUserDataController);
  router.get("/user-profile/:id", getUserController);
  router.put("/edit-profile", editUserProfileController);
  router.post(
    "/upload-profile-picture",
    uploadProfilePicture,
    editUserProfileController
  );
  router.post(
    "/upload-cover-picture",
    uploadCoverPicture,
    editUserProfileController
  );
  router.get("/find-users/:userId", findAllUsersController);
  router.put("/save-post", savePostController);
  router.post("/follow-user", followUserController);
  router.get(
    "/get-community-members/:communityId",
    getCommunityMembersController
  );

  //admin routes

  router.get("/find-all-users", findAllUsersAdminController);
  router.put("/change-user-status/:userId", changeUserStatusAdminController);

  return router;
};
