const mongoose = require("mongoose");



const HotelSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    phoneNumber: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    price:  { type: Number, required: true },
    rate: { type: Number },
    description: { type: String },
    images:[],
    categoryId: { type: mongoose.Types.ObjectId, ref: "Category" },
  },
  {
    timestamps: true,
  }
);

HotelSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

module.exports = mongoose.model("Hotel", HotelSchema);
