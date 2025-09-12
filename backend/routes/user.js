const express = require("express");

//Import User Controller
const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

//Login route
router.post("/login", loginUser)

//Signup Route 
router.post("/signup", signupUser)


module.exports = router