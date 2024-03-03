import express from "express";
import { userController } from "../../libs/controller/";
import { uploadProfilePicture, uploadCoverPicture } from "../../helper/multer";
export default (dependencies: any) => {
  const router = express();

  const {
    saveUserDataController,
    getUserController,
    editUserProfileController,
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

  return router;
};
