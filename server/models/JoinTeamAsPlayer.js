const mongoose = require("mongoose");
const { Schema } = mongoose;

const JoinTeamAsPlayerSchema   = new Schema({

    City:{
        type:String
    },
    DateToPlay:{
    type:Date
    },
    Comment:{
        type:String
    },

})
const JoinTeamAsPlayer = mongoose.model("JoinTeamAsPlayer", JoinTeamAsPlayerSchema);
module.exports = {  JoinTeamAsPlayer }  ;