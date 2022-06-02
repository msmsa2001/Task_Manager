var Userdb=require('../model/model');

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:'Content can not be emtpy'})
    }

    const user=new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    user
    .save(user)
    .then(data=>{
        // res.send(data)
        res.redirect('/add_user')
    })
    .catch(error=>{
        res.status(500).send({
            message:error.message || 'Some error Occured while Creating a Create Operation'
        })
    })
}

exports.find=(req,res)=>{
    if(req.query.id){
        const id =req.query.id;

        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found user with"+id})    
            }
            else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Erro retrieving user id"+id})
        })
    }
    else{
        Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message ||'Error Occured while retriving user Information'})
    })
    }
    
}

exports.update=(req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update can not be empty"})
    }

    const id=req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Connot Update user with ${id}.Maybe User Not Found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({Message:"Error Update user Information"})
    })
}

exports.delete=(req,res)=>{
    let id=req.params.id;
    console.log(id)
    // let userdata = Userdb.findOneAndDelete(id)
    let userdata = Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({
                message:`Connot Delete user with ${id}.Maybe id is Wrong`
            })
        }
        else{
            res.send({
                Message:"User Was delete Successfully"
            })
        }
        
    })
    .catch(err=>{
        res.status(500).send({
            Message:"Error Update user Information"
        })
    })

    console.log(userdata)
}