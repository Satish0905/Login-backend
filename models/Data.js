const mongoose=require("mongoose");

const DataSchema=new mongoose.Schema({
    email:String,
    password:String
})

const DataModels=mongoose.model("login",DataSchema)
module.exports=DataModels