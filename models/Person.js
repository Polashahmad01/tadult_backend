const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
    dateOfBirth: {
        type: String,
        default: Date.now
    },
    fullName: {
        type: String,
        required: [true, "Please add full name"]
    },
    emailAddress: {
        type: String,
        unique: true,
        match: [
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            "Please add a valid email.",
        ],
        required: true
    },
    userName: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "Please add a username"]
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Person", PersonSchema);
