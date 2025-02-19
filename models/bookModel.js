const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    autor: { type: String, required: true },
    gender: { type: String, required: true },
    year: { type: Number, required: true },
    add_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Book", bookSchema);