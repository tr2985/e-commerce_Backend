const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    name: {
        type: String, // initial captital letter for mongoose
        required: true,

    },

    price: Number,
    description: String,
    image: String,
    catalog: String,
    stock: Number


});

module.exports = mongoose.model('Product', UserSchema);
