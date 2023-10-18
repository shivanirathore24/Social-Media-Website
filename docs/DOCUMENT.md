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
