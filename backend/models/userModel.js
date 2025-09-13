const mongoose = require('mongoose')
// bacrypt is imported for encrypting the password
const bcrypt = require("bcrypt")
// validtor is used to validate the email and the password
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

//Static Sign-up method
userSchema.statics.signup = async function (email, password) {
    const exists = await this.findOne({ email })

    if(!email || !password){
        throw Error ("All Fields are Mandatory")
    }
    if(!validator.isEmail(email)){
        throw Error ('Email is Not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error ('Enter a Strong password')
    }


    if (exists) {
        throw Error("Email already Exits")
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })
    return user
}

module.exports = mongoose.model("User", userSchema)