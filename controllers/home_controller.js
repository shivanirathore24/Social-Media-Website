const Post = require("../models/post");

module.exports.home = async function (req, res) {
  try {
    const posts = await Post.find({}).populate('user').exec();
    return res.render("home", {
      title: "Home",
      posts: posts,
    });
  } catch (err) {
    console.log("Error in finding posts:", err);
    return res.status(500).send("Internal Server Error");
  }
};
