const mongoose=require('mongoose')

var schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    status:String,
    gender:String
})


const Userdb=mongoose.model('Playlist',schema)

module.exports=Userdb;