const db = require("../models")
const bcrypt = require("bcryptjs");


// Index
const index = (req, res) => {
    db.User.find()
    .exec((err, allUsers) => {
        if (err) return res.status(400).json({
            message: "Failure",
            error: err
        })
        return res.status(200).json({
            message: "Success",
            data: allUsers
        })
    })
}
// Show
const show = async (req, res) => {
    // req.params.id => req.userId
    // After login setup, need to change id with(login user id)
    // maybe same with destory function (delete user)
    // can't figure out how to get the profile with req.userId
    // so use req.param.id
    try {
        const foundUser = await db.User.findById(req.params.id)
        return res.status(200).json({
            message: "Success",
            data: foundUser
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        })
    }
}

// Create
const create = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt)
        const user = new db.User(req.body);
        user.password = hash
        const createdUser = await user.save();
        return res.status(200).json({
            message: "User Created",
            data: createdUser
        })
    } catch(err) {
        return res.status(400).json({
            message: "Failure",
            error: err,
        })
    }
};
module.export = {
    index,
    show,
    create
}