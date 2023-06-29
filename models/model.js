const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim : true,
        maxLength: [20, 'name must be less than 20 words']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    hk: {
        type: String,
        required: [true, 'hk is required'],
    }
})

module.exports = mongoose.model("User", userSchema);