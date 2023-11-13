const mongoose = required("mongoose");
const Category = mongoose.schema({
    name: { type: String, require: true },
    description: { type: String, require: false }
});

module.exports = mongoose.model('Category', Category);