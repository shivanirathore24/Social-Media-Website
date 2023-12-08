const Post = require("../models/post");
const Comment = require("../models/comment");

module.exports.create = async function (req, res) {
  try {
    const post = await Post.create({
      content: req.body.content,
      user: req.user._id,
    });

    //post has been sucessfully created
    return res.redirect("back");
  } catch (err) {
    console.log("Error in creating a post:", err);
    //handle the error, possibly by sending an error response to the client
    return res.status(500).send("Interval Server Error");
  }
};


module.exports.destroy = async function (req, res) {
  try {
    const post = await Post.findById(req.params.id).exec();

    if (!post) {
      return res.status(404).send("Post not found");
    }

    // .id means converting the object id into string
    if (post.user == req.user.id) {
      await Post.deleteOne({ _id: req.params.id });
      await Comment.deleteMany({ post: req.params.id }).exec();
      return res.redirect("back");
    } else {
      return res.redirect("back");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};
