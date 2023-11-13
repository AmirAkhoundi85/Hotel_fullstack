const mongoose = required("mongoose");
const Hotel  = mongoose.schema({
    name: { type : String, require : true },
    address:{type:String},
    city:{type:String},
    state:{type:String},
    country:{type:String},
    rate:{type:Number},
});


module.exports = mongoose.model('Hotel', Hotel);
