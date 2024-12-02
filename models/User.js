const mongoose=require("mongoose");

const DataSchema=new mongoose.Schema({
    firstname:{
        type:String,
        default:null
    },
    lastname:{
        type:String,
        default:null
    },
    email:{
        type:String,
        unique:true
    },
    mobilenumbercode:{
        type:String,
        default:null
    },
    mobilenumber:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        default:null
    }
})

const DataModels=mongoose.model("user",DataSchema)
module.exports=DataModels