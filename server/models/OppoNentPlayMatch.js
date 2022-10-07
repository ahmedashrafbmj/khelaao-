const mongoose = require("mongoose");
const { Schema } = mongoose;

const OpponentPlayMatchSchema   = new Schema({

    City:{
        type:String
    },
    Contact:[{
    type:String
    }],
    Comment:{
        type:String
    },
    MatchDate:{
        type:Date
    }

})
const OpponentPlayMatch = mongoose.model("OpponentPlayMatchSchema", OpponentPlayMatchSchema);
module.exports = { OpponentPlayMatch }  ;