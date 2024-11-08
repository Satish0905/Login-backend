const mongoose=require("mongoose");

const DataSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
})

const DataModels=mongoose.model("user",DataSchema)
module.exports=DataModels