const mongoose = require("mongoose");
const { Schema } = mongoose;

const ParticipateSchema   = new Schema({

    City:{
        type:String
    },
    Contact:[{
    type:String
    }],
    Comment:{
        type:String
    }

})
const Participate = mongoose.model("Participate", ParticipateSchema);
module.exports = { Participate };