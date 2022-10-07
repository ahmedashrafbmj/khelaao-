const mongoose = require("mongoose");
const { Schema } = mongoose;

const NeedPlayerForTeamSchema   = new Schema({

    City:{
        type:String
    },
    Contact:[{
    type:String
    }],
    Comment:{
        type:String
    },
    WantedRole:{
        type:String
    }

})
const NeedPlayerForTeam = mongoose.model("NeedPlayerForTeam", NeedPlayerForTeamSchema);
module.exports = {  NeedPlayerForTeam }  ;