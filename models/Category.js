const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String },
});

CategorySchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});
module.exports = mongoose.model("Category", CategorySchema);