const userModel = require("../models/userModel")


//Login user 

const loginUser = async (req, res) => {
    res.json({ msg: "Login User" })
}

//Signup user 

const signupUser = async (req, res) => {

    const { email, password } = req.body

    try {
        const user = await userModel.signup(email, password)

        res.status(200).json({ email, user })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }

    // res.json({ msg: "Signup User" })
}

module.exports = { loginUser, signupUser }