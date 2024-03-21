import mongoose from "mongoose";
enum postType  {"Free", "Exclusive"}

const postSchema = new mongoose.Schema({
  // _id: {
  //   type: String,
  // },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  image: {
    type: Array,
  },
  like: {
    type: Array,
  },
  comment: {
    type: Array,
  },
  postType: {
    type: String,
    enum: postType
  },
  createdBy: {
    type: String,
    ref: 'User'
  },
  tags: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
  reportedUsersList: {
    type: Array,
  },
  communityId: {
    type: String,
  },
  visibility: {
    type: Boolean,
    default: true,
  },
});

const Post = mongoose.model("Post", postSchema);

export { Post };
