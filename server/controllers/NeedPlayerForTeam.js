const {NeedPlayerForTeam} = require("../models/NeedPlayerForTeam")




exports.postNeedPlayerForTeam = async(req,res)=>{
    try{
        const needPlayerForTeam = req.body
        const result  = await new NeedPlayerForTeam(needPlayerForTeam)
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

exports.getNeedPlayerForTeam  = async(req,res)=>{
    try{
        const needPlayerForTeam = await NeedPlayerForTeam.find()
        return res.status(200).json({ success: true, Data: needPlayerForTeam });

    }
    catch (error) {
        return res.status(500).json({ success: false, err:error });
      }
}
  exports.upDateNeedPlayerForTeam = async (req,res)=>{
     
        try{
            const {id} = req.params
            const updateNeedPlayerForTeam= await NeedPlayerForTeam.findByIdAndUpdate(id,req.body,{
                new:true
            })
            res.status(200).send({success:true,Data:updateNeedPlayerForTeam})
           }
           catch(err1){
            res.status(400).send({success:false,message:err1.message})
           }

    
        }     

        exports.deleteNeedPlayerForTeam = async(req,res)=>{
            try{
                const {id} = req.params
                const deleteNeedPlayerForTeam  = await NeedPlayerForTeam.findByIdAndDelete({_id:id})
                res.status(200).send({success:true,message:"Player Wanted Delete successfully",});
            }
            catch(err){
             res.status(422).send({success:false,message:err.message})
            }
         }

