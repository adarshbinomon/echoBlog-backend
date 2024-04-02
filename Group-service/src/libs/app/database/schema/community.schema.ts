import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
  name: String,
  about: String,
  profilePicture: {
    type: String,
    default: "https://media.craiyon.com/2023-11-24/nogjsbGmTRaAI8eYNclAQw.webp",
  },
  coverPicture: {
    type: String,
    default: "https://wallpapercave.com/wp/wp2089896.jpg",
  },
  members: Array,
  post: Array,
  createdBy: String,
  createdOn: {
    type: Date,
    default: Date.now(),
  },
  // admins
});

const Community = mongoose.model("Community", communitySchema);
export { Community };
