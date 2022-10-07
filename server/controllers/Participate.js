const { Participate }  = require("../models/Participate")




exports.postParticipate = async(req,res)=>{
    try{
        const participate = req.body
        const result = await new Participate(participate)
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

exports.getParticipate  = async(req,res)=>{
    try{
        const result = await Participate.find()
        return res.status(200).json({ success: true, Data: result });

    }
    catch (error) {
        return res.status(500).json({ success: false, err:error });
      }
}




  exports.upDateParticipate = async (req,res)=>{
     
        try{
            const {id} = req.params
            const updateParticipate= await Participate.findByIdAndUpdate(id,req.body,{
                new:true
            })
            res.status(200).send({success:true,Data:updateParticipate})
           }
           catch(err1){
            res.status(400).send({success:false,message:err1.message})
           }

    
        }     

        exports.deleteParticipate = async(req,res)=>{
            try{
                const {id} = req.params
                const deletPackage  = await Participate.findByIdAndDelete({_id:id})
                res.status(200).send({success:true,message:"Store delet successfully",});
            }
            catch(err){
             res.status(422).send({success:false,message:err.message})
            }
         }