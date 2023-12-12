const User = require("../models/user"); //import UserSchema

module.exports.profile = async function (req, res) {
  try {
    const user = await User.findById(req.params.id).exec();
    return res.render("user_profile", {
      title: "User Profile",
      profile_user: user,
    });
  } catch (err) {
    console.log("Error in finding user:", err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports.update = async function (req, res) {
  try {
    if (req.user.id == req.params.id) {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
      return res.redirect("back");
    } else {
      return res.status(401).send("Unauthorized");
    }
  } catch (err) {
    console.error("Error updating user:", err);
    return res.status(500).send("Internal Server Error");
  }
};

//render the sign up page
module.exports.signUp = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
  return res.render("user_sign_up", {
    title: "Social Media | Sign up",
  });
};

//render the sign in page
module.exports.signIn = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
  return res.render("user_sign_in", {
    title: "Social Media | Sign In",
  });
};

/*** Post the sign up data ***/
module.exports.create = async function (req, res) {
  try {
    // During sign-up, check if the password and confirm-password doen't match
    if (req.body.password !== req.body["confirm-password"]) {
      return res.redirect("back");
    }

    // Find if a user with the same email is already created/present
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      // If user is not found, create the user
      const newUser = await User.create(req.body);
      return res.redirect("/users/sign-in");
    } else {
      // If the user is already present
      return res.redirect("back");
    }
  } catch (error) {
    console.error("Error in creating user while signing up:", error);
    return res.status(500).send("Server error");
  }
};

/*** sign-in and create a session for a user ***/
module.exports.createSession = async function (req, res) {
  return res.redirect("/");
};

module.exports.destroy = function (req, res) {
  req.logout(function (err) {
    if (err) {
      // Handle errors, e.g., log the error or display a user-friendly message.
      console.error("Logout error:", err);
    }
    // Redirect the user to the home page after logout or error handling.
    return res.redirect("/");
  });
};
