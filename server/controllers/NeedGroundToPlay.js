const { OpponentPlayMatch }  = require("../models/OppoNentPlayMatch")




exports.postNeedGroundToPlay = async(req,res)=>{
    try{
        const needGroundToPlay = req.body
        const result = await new NeedGroundToPlay(needGroundToPlay)
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

exports.getNeedGroundToPlay  =  async(req,res)=>{
    try{
        const needGroundToPlay = await NeedGroundToPlay.find()
        return res.status(200).json({ success: true, Data: needGroundToPlay });

    }
    catch (error) {
        return res.status(500).json({ success: false, err:error, });
      }
}
  exports.upDateNeedGroundToPlay = async (req,res)=>{
     
        try{
            const {id} = req.params
            const updateNeedGroundToPlay= await NeedGroundToPlay.findByIdAndUpdate(id,req.body,{
                new:true
            })
            res.status(200).send({success:true,Data:updateNeedGroundToPlay})
           }
           catch(err1){
            res.status(400).send({success:false,message:err1.message})
           }

    
        }     

        exports.deleteNeedGroundToPlay = async(req,res)=>{
            try{
                const {id} = req.params
                const deletNeedGroundToPlay  = await NeedGroundToPlay.findByIdAndDelete({_id:id})
                res.status(200).send({success:true,message:"OpponentPlayMatch successfully",});
            }
            catch(err){
             res.status(422).send({success:false,message:err.message})
            }
         }