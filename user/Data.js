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
        default:null
    },
    mobilenumbercode:{
        type:String,
        default:null
    },
    mobilenumber:{
        type:String,
        default:null
    },
    password:{
        type:String,
        default:null
    }
})

const DataModels=mongoose.model("user",DataSchema)
module.exports=DataModels