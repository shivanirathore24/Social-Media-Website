const Post = require("../models/post");
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
