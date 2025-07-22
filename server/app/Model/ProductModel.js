const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    profilePicture: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
