const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
  },
  {
    timestamps: true,
    // toJSON: {
    //   transform: function (doc, ret) {
    //      ret.id = ret._id.toString();
    //      delete ret._id;
    //      delete ret.__v;
    //   },
    // },
  }
);


UserSchema.set("toJSON", {
  transform:  (doc, ret)=> {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    delete password;
  },
});


module.exports = mongoose.model("User", UserSchema);

