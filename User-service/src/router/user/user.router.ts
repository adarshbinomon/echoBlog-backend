import express from "express";
import { userController } from "../../libs/controller/";
import {
  uploadProfilePicture,
  uploadCoverPicture,
} from "../../helper/s3Multer";
import { verifyUser } from "../../utils/jwt/verify.user";
import { Dependencies } from "../../utils/interfaces/dependency.interface";
// import { verifyUser } from "@adarshbinomon/verify-user";
export default (dependencies: Dependencies) => {
  const router = express();

  const {
    saveUserDataController,
    getUserController,
    editUserProfileController,
    findAllUsersController,
    savePostController,
    followUserController,
    findAllUsersAdminController,
    getCommunityMembersController,
    searchUserController,
  } = userController(dependencies);

  router.post("/user-details", verifyUser, saveUserDataController);
  router.get("/user-profile/:id", verifyUser, getUserController);
  router.put("/edit-profile", verifyUser, editUserProfileController);
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
  router.get("/find-users/:userId", verifyUser, findAllUsersController);
  router.put("/save-post", verifyUser, savePostController);
  router.post("/follow-user", verifyUser, followUserController);
  router.get(
    "/get-community-members/:communityId",
    verifyUser,
    getCommunityMembersController
  );

  //admin routes

  router.get("/find-all-users", findAllUsersAdminController);
  router.get("/search-user/:regex", searchUserController);

  return router;
};
