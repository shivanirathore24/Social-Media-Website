const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users_controller");
router.get("/profile", usersController.profile); //accessing profile function from usersController

module.exports = router;
