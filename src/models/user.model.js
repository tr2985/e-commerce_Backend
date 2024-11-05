const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    email: {
        type: String, // initial captital letter for mongoose
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true

    }



});

module.exports = mongoose.model('User', UserSchema);
