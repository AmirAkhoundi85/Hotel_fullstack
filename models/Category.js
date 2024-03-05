const mongoose = require("mongoose");

const Category = mongoose.Schema({
    name: { type: String, require: true },
    description: { type: String }
});

module.exports = mongoose.model('Category', Category);