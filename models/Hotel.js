const mongoose = require("mongoose");

const Hotel  = mongoose.Schema({
    name: { type : String, require : true },
    address:{type:String},
    city:{type:String},
    state:{type:String},
    country:{type:String},
    rate:{type:Number},
},{
    timestamps:true
});


module.exports = mongoose.model('Hotel', Hotel);
