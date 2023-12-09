## Documentation [All steps for Project]

### 1: Setting up Directory Structure:

1. Create an 'index.js' file under your project directory i.e 'SocialMediaWebsite' folder.
2. For creating 'package.json,' run the following command in your project directory:

   ```bash
   npm init
   ```

3. Create folders using the 'mkdir' command in your project directory. For example:
   - To create a 'routes' folder:
   ```bash
   mkdir routes
   ```
   - To create a 'controllers' folder:
   ```bash
   mkdir controllers
   ```
   - To create a 'views' folder:
   ```bash
   mkdir views
   ```
   - To create a 'models' folder:
   ```bash
   mkdir models
   ```
   - To create a 'config' folder:
   ```bash
   mkdir config
   ```

### 2: Setup Express Server

1. Install express server; then node_modules folder will be created; verify either installed or not: check package.json file --> in dependencies you will find 'express' with verson .
   ```bash
   npm install express
   ```
2. Write code in 'index.js' file to setup express server.

### 3: Add .gitignore file and npm start

1. Added "node_modules/" inside .gitignore file.
2. Intially, we were using command to run project:
   ```bash
   nodemon index.js
   ```
3. Now added "start": "nodemon index.js" inside script in package.json, now to run project use command:
   ```bash
   npm start
   ```

### 4: Set up express Router

1. Created 'index.js' file under 'routes folder' and write code.
2. Entry file(index.js), use express router.
3. Do check "npm start" whether router is loaded or not.

### 5: Create a 'home' Controller and router for request '/':

1. Created 'home_controller.js' file under 'controllers folder' and write code.
2. Access and use 'home function of home_controlleer.js' inside routes(index.js).
3. For default route, access from index.js(entry file): app.use("/", require("./routes"));
4. Start project and check in browser "http://localhost:8000/".

### 6: Create a 'user' controller and router for request 'users/profile':

1. Created 'users_controller.js' file under 'controllers folder' and write code.
2. Created 'users.js' file under 'routes folder'.
3. Access and use 'profile function of users_controlleer.js' inside routes(users.js) for /profile request.
4. routes(index.js) --> root of all other routes i.e for further routes, access from here:
   router.use('/routerName', require('./routerFile'))
   - for request '/'(bydefault): index.js(entry point) --> routes(index.js) --> home_controller.js (home function)
   - for reuqest '/users/profile': index.js(entry point) --> routes(index.js) --> routes(users.js) -->users_controller.js (profile function)

### 7: Routes:

1. routes(index.js): Entry point for all request and handles all direct urls i.e (root level routes) For example : /home , /contact, /about etc
2. routes(users.js): handles all user related request. For example: users/profile , users/create, users/edit etc..

### 8: Install EJS And Setup View Engine:

1. Install EJS; verify either installed or not: check package.json file --> in dependencies you will find 'ejs' with verson.
   ```bash
   npm install ejs
   ```
2. Setup View Engine (EJS) in index.js(entry file).

### 9: Create a View for 'home'

1. Create 'home.ejs' file under 'views folder' to write html code.
2. Edit home_controller.js file, replace 'res.end' method(used to render static data directly to browser) with 'res.render' method(used to render dyanamic content).

### 9: Partial views are not re-used.

1. Partials are particularly useful for reusing the same markup between different views, layouts, and even other partials.
2. Header and Footer which are to be used in both home and user_profile but right now it's not re-used.

### 10: Implementing Partials

1. Created '\_header.ejs' and '\_footer.ejs' partial views files which are to be re-used in different views i.e home and user_profie.
2. Include a relative partial file in a template using <%- include(PARTIAL_FILE) %>.

### 11: Create a layout

1. Install Express EJS Layouts
   ```bash
   npm install express-ejs-layouts
   ```
2. EJS layouts Benefits - simplify code management, enhance efficiency, and ensure a consistent user experience by reusing common elements. This reduces redundancy, speeds up page loading, and eases updates.
3. Use 'express ejs Layout' before express router in index.js(entry file).
4. Create layout.ejs file which gets render, and body i.e '<%- body %>' gets filled with variable part.
5. Keep only variable part in home.ejs and user_profile.ejs.

### 12: Setting up Static files Access

1. Create 'assets' folder under project directory i.e 'SocialMediaWebsite' folder.

   - To create a 'assets' folder:

   ```bash
   mkdir assets
   ```

2. Create sub-folder 'css', 'js' , 'images' within 'assets folder'. Within css folder, create 'layout.css' file and put styling.
3. Setup static assets inside index.js(entry file) using - app.use(express.static("./assets"));
4. Link layout.css "href - /css/layout.css" inside layout.ejs(views folder).
5. Styles will be applied to all other pages (i.e, layout.css contains the common styles) that will be applied to all page which inherit from layout.ejs file.

### 13: Static Files for styling individuals Pages

1. Create user_profile.css file for styling user_profile page and write styles.
2. Link user_profile.css "href - /css/user_profile.css" inside user_profile.ejs(views folder).
3. Run Project, inspect - You will find css link is coming under body which is a bad solution. For better solution follow below steps:
4. Step-1: Extract style and scripts from sub pages into the layout [inside index.js(entry file)]
   - app.set("layout extractStyles", true);
   - app.set("layout extractScripts", true);
5. Step-2: put '<%- style %>' at the end of head tag and '<%- script %>' at the end of body tag [inside layout.ejs]

### 14: Linking to mongoDB using mongoose

1. Mongoose is a Node.js(Object Data Modeling) library for MongoDB, offering schema definition, data validation, and an API for data operations. It streamlines MongoDB usage, maintaining data integrity, and simplifying Node.js app development with MongoDB.
2. Install mongoose; verify either installed or not: check package.json file --> in dependencies you will find 'mongoose' with verson.
   ```bash
   npm install mongoose
   ```
3. Create mongoose.js file inside config folder; write code that connects Node.js to a MongoDB database and logs either a successful or failed connection.
4. Imports a database connection setup from the "mongoose.js" file into index.js (entry file).
5. Run Project, you will see "MongoDB connect" message for successful connection.

### 15: Setting up User Schema

1. A schema - used with database like MongoDB, defines the structure of data, specifying the type and organization of fields. It enforces data consistency, validation, and integrity, ensuring that data adheres to a predefined structure.
2. Create 'user.js' file under 'models folder' for userSchema and create fields - email, password and name with timestamps(to record when user was created).

### 16: Rendering Pages for SignUp & SignIn

1. Create 2 files under 'views folder' - 'user_sign_up.ejs' and 'user_sign_in.ejs' and write html code.
2. Add actions - 'signUp' and 'signIn' inside users_controller.js file to handle request from routes.
3. Add Mapping "/sign-up" and "/sign-in" inside user.js(routes) URLs to functions in "users_controller.js"
4. For example- Type URL in browser: http://localhost:8000/users/sign-up --> this url is sent as request to routes --> routes maps this request to action 'signUp' --> 'signUp' action renders view page i.e 'user_sign_up.ejs'.

### 17: Creating Forms for SignUp and SignIn

1. Create forms for signUp and signIn in 'user_sign_up.ejs' and 'user_sign_in.ejs'.
2. After Clicking "Sign Up" button --> Action - '/users/create' will be called --> Add action - 'create' in users_controller.js file & will write code later.
3. After Clicking "Sign In" button --> Action - '/users/create-session' will be called --> Add action - 'createSession' in users_controller.js file & will write code later.

### 18: Creating and Altering a Cookie

1. Cookie - small piece of data stored on a user's web browser by a website, commonly used for - user authentication, session management, and tracking user preferences.
2. "cookie-parser" is a middleware in Node.js that simplifies handling cookies, parsing their data, and attaching them to the request object, making it easier to work with cookies in web applications. Install "cookie-parser" :
   ```bash
   npm install cookie-parser
   ```
3. Use cookie in index.js(entry file) as middleware for parsing cookies, enabling data handling and session management.
4. Run Project> npm start; inspect --> application --> cookies : add - name: user_id and value: 24 (at browser side).
5. In home_controller.js --> you can print user_id value from request body(from browser side) i.e console.log(req.cookies);  
   You can edit value of user_id at server side i.e res.cookie("user_id", 25);
6. Refresh home page, check value at console and in cookie.

## _Authentication Steps:_

- Create user (Sign-up)
- Create Session (Sign-In)
- Show Details of signed-in user on profile page.
- Sign out.

### 19: Create User Sign-Up

1. Create action - 'create' inside users_controller.js for creating user during Sign-up.
2. Action 'create' - to handle user sign-up , utilizes modern asynchronous programming using `async/await` for improved readability and control flow.
   Steps followed :

- Imports the user.js from Models [i.e const User = require("../models/user");], in which user Schema is defined through, which we can interact with database.
- _Password Confirmation_ : if they don't match, the user is redirected back to the registration/sign-up page.

- _User Existence check_ : It then proceeds to query the database to check for the existence of a user with the same email.
  - _If No Matching User is Found_ : A new user is created using the data from the registration form(`model.create(data)' --> i.e User.create(req.body)).
    The user is redirected to the sign-in page.
  - _If a User With the Same Email Already Exists_ : The code redirects the user back to the registration page.
- _Error Handling_ : The code includes error handling to catch and log any issues that may occur during the process. If an error is encountered, the server responds with a server error message (status code 500).

3. Defines a POST request route in user.js(views) where the usersController.create function is executed when the "/create" endpoint is accessed.
   i.e router.post("/create", usersController.create);

4. Click Image: [Data saved in database after Sign-up](../assets/images/output/user_signup_db.png)

### 20. Create User Sign-In (Manual Authentication)

1. Created seperate branch for Manual Authentication :
   ```bash
   git checkout -b manual-local-auth
   ```
2. When user clicks on 'Sign In' button then action - '/users/create-session is called'.
3. Create action - 'createSession' inside users_controller.js for creating Session during Sign-In.
4. The 'createSession' function in the user controller handles user sign-in and session creation, employing modern asynchronous programming with async/await. Steps are taken within this action :

- _User Lookup_ : Search for a user in database with the provided email using await User.findOne({ email: req.body.email }).

- _User Found_ :

  - _Password Check_: If a user is found, check if the provided password matches the user's password stored in the database. If not, the user is redirected back to the 'sign-in' page.
  - _Session Creation_: If the user's email and password match, a session is created. This involves setting a user identifier in a cookie (in response i.e res.cookie("user_id", user.id); - "user_id" is set to the user's ID) and then redirecting the user to their 'profile page'.

- _User Not Found_ : If no user with the provided email is found, the code redirects the user back to the sign-in page, indicating that the user doesn't exist.

- Error Handling : The code includes error handling to catch and log any issues that may occur during the process. If an error is encountered, the server responds with a server error message (status code 500).

4. Defines a POST request in routes(users.js) that links to the createSession function in the usersController. When accessed, it initiates user session creation.

5. If user sign-in successfully --> session is created --> verfiy: inspect --> application --> cookies --> check user_id value that will be same as store in database for that user.

### 21. Show details of Signed-in User

1. Edit 'profile' action of users_controller.js - checking if a user is authenticated via cookies, fetching user data by ID, rendering a profile page (passing a title and user data to the template), and handling potential errors.
2. Show details of user in views(user_profile.js) - displays the user's name and email, using data from the "user" object.

## OR

### 20. Installing and Setting up Passport.js

1. Install passport.js
   ```bash
   npm install passport
   npm install passport-local
   ```
2. Passport.js:

   - Simplifies user authentication in Node.js applications.
   - Supports various authentication strategies (e.g., username/password or OAuth).
   - Primarily handles user identity verification and authentication.
   - Used to secure routes and personalize user experiences.

3. Create file 'passport-local-strategy.js ' under config folder - configures Passport, a Node.js authentication middleware, to use a LocalStrategy for user authentication. When a user signs in, Passport finds the user by their email, checks if the password matches, and serializes their user ID into a cookie. When a request is made, it deserializes the user based on the stored user ID from the cookie for authentication

### 21. Express-Session and using passport for authentication

1. Install express-session :
   ```bash
   npm install express-session
   ```
2. Express Session:

   - Manages/create user sessions in Express.js.
   - Stores and manages session data, like user-specific information in encrypted format in the cookie.
   - Focuses on session data storage and state management.
   - Enhances security and enables customization of user experiences.

3. index.js(entry file)- setup to use passport and express-session.

4. users_controller.js - redirect to homepage when createSession action is executed.

5. routes(users.js) - uses Passport's local authentication strategy as middleware. On failure, it redirects to "/users/sign-in"; on success, it calls "createSession" in "usersController."

6. Run Project --> Sign-In --> inspect(homepage) --> application --> cookies - check name of session will be "SocialMediaWeb" and value will be encrypted.

### 22. Setting current Authenticated User

1. config(passport-local-strategy.js) - defines two middleware functions for Passport.js

   - _checkAuthentication_: It checks if a user is authenticated (logged in). If authenticated, it allows the request to proceed to the next function. If not, it redirects the user to the sign-in page.
   - _setAuthenticatedUser_: It sets the current user information from the session cookie to the response's local variables, making the user data available in views, if the user is authenticated.

2. routes(users.js) - route "profile" is accessible if the user is authenticated, with the help of Passport middleware "checkAuthentication" before calling the "usersController.profile" function i.e restrict profile-page visibility when user is signed-out.
   e.g: router.get("/profile", passport.checkAuthentication, usersController.profile);

3. index.js(entry file) - middleware sets the currently authenticated user's information from the session cookie as a local variable, making it available for views i.e app.use(passport.setAuthenticatedUser);

4. Problems :

- Whenever server is re-started, user gets signed-out --> session data is stored temporarily --> Solution : mongoDB
- Sign-in & Sign-up page are visible when user is signed in i.e during signed-in : sign-up and sign-in page shouldn't visible.
- Restrict profile-page visibility when user is signed-out.

### 23. Accessing User data to views and limiting page acess

1. views(user_profile.js) - display the user's name and email on a webpage.
2. controller(users_controller.js) - 'signUp' & 'signIn' function use req.isAuthenticated() to verify user login. Authenticated users are redirected to their profiles, while unauthenticated users can access the sign-up or sign-in pages, enhancing security and user experience. (i.e during sign-in, it will remain to profile page & won't go up to sign-up and sign-in page)
3. Problem Solved - During signed-in: sign-up and sign-in page shouldn't visible & Restrict profile-page visibility when user is signed-out.

### 24. Setting Up MongoStore for session cookies

1. Problem : without mongo store, user was logged out after every server restart. This issue is resolved.
2. Install connect-mongo:
   ```bash
   npm install connect-mongo
   ```
3. index.js(entry file) :

- Configuring a session store using connect-mongo for MongoDB session storage i.e const mongoStore = require("connect-mongo");
- Configures session settings -
  - The store option configures the session store using connect-mongo.
  - mongoStore.create() is used to create an instance of the store, specifying the MongoDB database URL for session storage.
  - The autoRemove option is set to "disabled" to control session removal behavior.
  - It logs any setup errors or a success message indicating that the MongoDB connection is configured for session storage.

4. Click Image: [sessions is created in mongoDB](../assets/images/output/mongoStore_for_session.png)

### 25. Creating Sign-out

1. Sign-Out is basically removing the user's session cookie to remove the identity.
2. views(\_header.ejs): HTML header - shows user's name, on clicking name will redirect to user's profile page; "Sign Out" when logged in; "Sign In" and "Sign Up" links when not logged in.
3. controller(users_controller.js): Create 'destroy' action in which req.logout() [function provided by the Passport.js library] is called to log a user out, with error handling. If an error occurs, it's logged. After logout or error handling, it redirects the user to the home page ("/").
4. routes(users.js): defines a route for "sign-out" using the "destroy" function from the "usersController".
5. Fixed bug: Included content from "\_footer" partial template in the layout.ejs.
6. Run Project --> When you sign-in: everytime new session is created and when sign-out: session is destroyed from mongoDB (sessions).

### 26. Setting up SCSS and Using it for Styling

1. Install : "node-sass-middleware"
   ```bash
   npm install node-sass-middleware
   ```
2. index.js( entry file) : sets up Node.js middleware using node-sass-middleware to compile SCSS files from the "assets/scss" directory to CSS files in "assets/css" with extended style, and serves them with a "/css" prefix.

3. Created 'scss' folder under assets: created scss files for layout, header, footer, user_profile and did styling (indentation based syntax).

4. views(layout.ejs) : added HTML links to external CSS files for styling the header, footer and layout (almost same for all pages)

5. Main-content(differs page to page) related link will added for respective view pages to provide unique styling. for e.g: profile page styling, html link will be added to user_profile.ejs.

6. Modified content realated to footer and header in \_header.ejs and \_footer.ejs.

7. Run Project --> While accessing a specific webpage, the required SCSS file for that page is compiled automatically. The resulting CSS file is updated in the "assets/css" folder before the page loads.

8. Remember: At current development, files are compiled when loading related pages, not when the server starts. But Ideally at production, pre-compilation (not during loading page) is ideal to avoid performance impact.

### 27. Creating Schema for Posts

1. In models folder --> Create file 'post.js' : creates a Mongoose schema for a "Post" with content and a reference to a "User" through their object ID. The "timestamps" option automatically adds "createdAt" and "updatedAt" fields to track document creation and updates.
2. views(home.ejs) : created a form for creating posts with a textarea input, and a "Post" button.

### 28. Saving Post to the Database

1. controllers --> create 'posts_controller.js' file : 'create' action creates a new post by extracting content from a request, linking it to the current user and handling both success and error cases.

2. routes --> create 'posts.js' file : handled post creation requests, directing them to the "create" function in the "postsController."

   ```bash
   router.post("/create", postsController.create);
   ```

3. routes(index.js) : added below line

   ```bash
   router.use("/posts", require("./posts"));
   ```

   allows you to access and use the routes defined in the "posts" module when you visit URLs that start with "/posts" in your web application.

4. views(home.ejs) : "Action" in the HTML form specifies the URL where the form data is sent when the user submits it. i.e added action="posts/create" in form tag.

5. Click Image: [Post is created in mongoDB for associated user](../assets/images/output/post_creation_db.png)

### 29. Display Posts and related User

1. controller(home_controller.js) : 'home' action retrieves all posts from the database, populates the "user" field for each post to include user details i.e.

   ```bash
   Post.find({}).populate('user').exec();
   ```

   It then renders the "home" view with the fetched posts, or handles errors with a server error response.

2. views(home.ejs) : code iterates through a list of posts and displays their 'content' along with the name of the 'user' who created them.

### 30. Check Authentication on Creating Post

1. Task is not to show Post-form before sign-in : views(home.ejs) -- > use 'locals.user' if-condition in post form then form won't be visible before sign-in.

2. But suppose if someone inspect code and create form and try to submit data ? We need to put route or controller level authentication i.e before calling 'create' action for post, check if user is signed-in or not. In routes(post.js) file -->
   ```bash
   router.post("/create", passport.checkAuthentication, postsController.create);
   ```
3. Problem solved: Form for creating post won't be visible before Sign-in, if someone try to create form by inspecting code and try to submit form data will be redirected to Sign-in page.

### 31. Created Comments Schema

1. models --> commentSchema is created - defining the structure for comments which includes fields for content, linked to a user and post via their ObjectIds, timestamps for automatic tracking of creation and modification times.
2. models(postSchema) : added comments array within the postSchema serves the purpose of maintaining references to all comments associated with a specific post . This approach allows for a direct relationship between a post and its associated comments, enabling efficient retrieval and manipulation of comments belonging to a particular post without needing additional queries. This denormalized structure facilitates easier access to all related comments for a given post within the Post document itself.

### 32. Adding Comments to the DB

1. views(home.ejs) : created a comment form per post if a user is logged in, allowing them to add comments to a post.
2. controllers --> Create 'comments_controller.js' file : code defines an async function to handle comment creation. It finds a post by ID, creates a comment with content, associates it with the post and user, updates the post's comment array, saves the post, and redirects to the homepage. Error handling ensures responses for potential errors.
3. routes --> Create 'comment.js' file : manages a route for creating comments, ensuring user authentication via Passport before invoking the comment creation controller function.
4. routes(index.js) : uses another router for '/comments' endpoint handling.
5. Click Image to see comments are created in DB :
   - [All Comments are created ](../assets/images/output/comments_creation_db.png) under 'comments' table.
   - [Creates an array that contains comments associated with that specific post](../assets/images/output/commentsArray_in_post.png) under 'posts' table.

### 33. Nested Population :: Display Comments & related User

1. controllers(home_controller.js) : added code which fetches all posts, populating 'user' in each post and 'user' in comments within those posts for complete user details.
2. views(home.ejs): added code- responsible for displaying comments associated with a specific post by using the post's unique ID to target and render the comment content along with the respective user's name.

### 34. Deleting a post (Authorized)

1. controllers(posts_controller.js) : Created an action "destroy" which finds a post by ID. If the current user matches the post owner, it deletes the post and associated comments before redirecting back; otherwise, it redirects back as unauthorized.
2. routes(posts.js): code sets up a route '/destroy/:id' using Passport for authentication, invoking 'postsController.destroy' to handle post deletion by ID.
3. views(home.ejs) : checks if the logged-in user matches the post's creator, then displaying a "Delete Post" link for the authenticated creator's post.

### 35. Deleting a Comment (Authorized)

1. controllers(comments_controller.js) : added code that retrieves the comment using Comment.findById() based on the comment ID. If the comment's user matches the current user, it deletes the comment using Comment.deleteOne() and removes its reference from the associated post using Post.findByIdAndUpdate() with $pull to update the comments array before redirecting; otherwise, it redirects without changes, handling errors.
2. routes(comments.js): route triggers the comment deletion process by calling the corresponding controller function after verifying passport authentication for the specified comment ID.
3. views(home.ejs): added delete link for the comment owner, allowing them to delete their own comment.
