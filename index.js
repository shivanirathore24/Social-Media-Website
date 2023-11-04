const express = require("express");
const cookieParser = require("cookie-parser");
const app = express(); //to get all functionalities of express libraries to run server
const port = 8000;

/*** database connection ***/
const db = require("./config/mongoose");

/*** used for session cookie  ***/
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const mongoStore = require("connect-mongo");

/*** Parser-Cookie as middleware ***/
app.use(express.urlencoded()); //middleware for parsing incoming requests' URL-encoded form data
app.use(cookieParser()); // middleware for parsing cookies, enabling data handling and session management

//write before express router, becoz views are going tp be render which have layouts.
const expressLayout = require("express-ejs-layouts");
app.use(expressLayout);

/*** Setup static assets ***/
app.use(express.static("./assets"));

/*** Extract style and scripts from sub-pages into the layouts ***/
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

/*** Setup View Engine (EJS) */
app.set("view engine", "ejs");
app.set("views", "./views");

/*** add middleware which takes sessionCookie and encrypts it ***/
app.use(
  session({
    name: "SocialMediaWeb",
    secret: "LordShiva",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: mongoStore.create(
      // Use 'new' with MongoStore to create an instance
      {
        mongoUrl: "mongodb://127.0.0.1:27017/socialmedia_dev",
        autoRemove: "disabled",
      },
      function (err) {
        console.log(err || "Connect-mongodb setup ok");
      }
    ),
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

/*** use express router ***/
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
