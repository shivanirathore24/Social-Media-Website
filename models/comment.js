const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: string,
      required: true,
    },
    //comment belongs to user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    posts: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
