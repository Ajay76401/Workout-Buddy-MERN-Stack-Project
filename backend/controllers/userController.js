const userModel = require("../models/userModel")

//importing Json Web Token
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
    return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "3d" })
}

//Login user 
const loginUser = async (req, res) => {
    res.json({ msg: "Login User" })
}

//Signup user 

const signupUser = async (req, res) => {

    const { email, password } = req.body

    try {
        const user = await userModel.signup(email, password)

        //Create token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }

    // res.json({ msg: "Signup User" })
}

module.exports = { loginUser, signupUser }