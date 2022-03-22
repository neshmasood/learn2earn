const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models");


const login = async (req, res) => {
    try{
        const foundUser = await db.User.findOne({email: req.body.email}).select("+password")
        if (!foundUser) {
            return res.status(400)
            .json({status: 400, message: "Email or password is wrong"})
        }
        
        const isMatch = await bcrypt.compare(req.body.password, foundUser.password)
        if(isMatch) {
            const token = jwt.sign({_id: foundUser._id}, "learn2earnteaching", {
                expiresIn: ""
            })
            return res.status(200).json({
                status: 200,
                message: "successful login",
                token,
                userId: foundUser._id
            })
        } else {
            return res.status(400).json({
                status: 400,
                message: "email or password is wrong"
            })
        }

    } catch(error) {
        return res.status(500).json({
            status: 500,
            message: "site broken"
        })
    }
}

module.exports = {
    login,
}
