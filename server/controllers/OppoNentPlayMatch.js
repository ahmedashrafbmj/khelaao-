const { OpponentPlayMatch }  = require("../models/OppoNentPlayMatch")




exports.postOpponentPlayMatch = async(req,res)=>{
    try{
        const opponentPlayMatch = req.body
        const result = await new OpponentPlayMatch(opponentPlayMatch)
        result.save()
        .then((response)=>{
            res.status(200).send({Data:response,success:true})
        })
        .catch((err)=>{
            res.status(400).send({success:false,message:err.message})
        })
    }
    catch(err){
        res.status(400).send({success:false,message:err.message})

    }
}

exports.getOpponentPlayMatch  =  async(req,res)=>{
    try{
        const opponentPlayMatch = await OpponentPlayMatch.find()
        return res.status(200).json({ success: true, Data: opponentPlayMatch });

    }
    catch (error) {
        return res.status(500).json({ success: false, err:error, });
      }
}
  exports.upDateOpponentPlayMatch = async (req,res)=>{
     
        try{
            const {id} = req.params
            const updateOpponentPlayMatch= await OpponentPlayMatch.findByIdAndUpdate(id,req.body,{
                new:true
            })
            res.status(200).send({success:true,Data:updateOpponentPlayMatch})
           }
           catch(err1){
            res.status(400).send({success:false,message:err1.message})
           }

    
        }     

        exports.deleteOpponentPlayMatch = async(req,res)=>{
            try{
                const {id} = req.params
                const deletOpponentPlayMatch  = await OpponentPlayMatch.findByIdAndDelete({_id:id})
                res.status(200).send({success:true,message:"OpponentPlayMatch successfully",});
            }
            catch(err){
             res.status(422).send({success:false,message:err.message})
            }
         }