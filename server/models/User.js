const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String, 
        required: true,
        minLength: 5, 
        // password will not show up on a query search
        select: false
    },
    // userStatus: {
    //     type: String,
    //     required: true,
    //     // i need a drop down of students, admin, volunter, etc. Maybe a dropDown?
    // }
});

const User = mongoose.model("User", userSchema);

module.exports = User;