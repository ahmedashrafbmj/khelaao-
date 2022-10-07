const { JoinTeamAsPlayer }  = require("../models/JoinTeamAsPlayer")





exports.postJointeamAsPlayer = async(req,res)=>{
    try{
        const joinTeamAsPlayer = req.body
        const result  = await new JoinTeamAsPlayer(joinTeamAsPlayer)
        result.save()
        .then((response)=>{
            res.status(200).send({success:true,Data:response})
        })
        .catch((err)=>{
            res.status(400).send({success:false,message:err})
        })

    }
    catch(error){
        res.status(400).send({success:false,message:error.message})

    }
}

exports.getJoinTeamAsPlayer  = async(req,res)=>{
    try{
        const joinTeamAsPlayer = await JoinTeamAsPlayer.find()
        return res.status(200).json({ success: true, Data: joinTeamAsPlayer });

    }
    catch (error) {
        return res.status(500).json({ success: false, err:error });
      }
}
  exports.upDateJoinTeamAsPlayer = async (req,res)=>{
     
        try{
            const {id} = req.params
            const updateJoinTeamAsPlayer= await JoinTeamAsPlayer.findByIdAndUpdate(id,req.body,{
                new:true
            })
            res.status(200).send({success:true,Data:updateJoinTeamAsPlayer})
           }
           catch(err1){
            res.status(400).send({success:false,message:err1.message})
           }

    
        }     

        exports.deleteJoinTeamAsPlayer = async(req,res)=>{
            try{
                const {id} = req.params
                const deletJoinTeamAsPlayer  = await JoinTeamAsPlayer.findByIdAndDelete({_id:id})
                res.status(200).send({success:true,message:"Store delet successfully",});
            }
            catch(err){
             res.status(422).send({success:false,message:err.message})
            }
         }

