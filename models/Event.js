const mongoose=require("mongoose");

const EventSchema=new mongoose.Schema({

eventName: {
    default:null,
    type:String
},
category: {
    type:String
},
startDate:  {
    default:null,
    type:String
},
endDate:  {
    default:null,
    type:String
},
eventType: {
    default:null,
    type:String
},
entryFee:  {
    default:null,
    type:String
},
feeAmount:  {
    default:null,
    type:String
},
feeCurrency:  {
    default:null,
    type:String
},
rules:  {
    default:null,
    type:String
},
minSeats:  {
    default:null,
    type:String
},
maxSeats:  {
    default:null,
    type:String
},
prize:  {
    default:null,
    type:String
},
extras:  {
    default:null,
    type:String
},
description:  {
    default:null,
    type:String
},
images: {
    default:null,
    type:String
},
})

const Event=mongoose.model("events",EventSchema)
module.exports=Event