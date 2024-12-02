const Event = require("../models/Event");
const DataModels = require("../models/User");
var jwt = require('jsonwebtoken');

const EventService=function(){
    this.getEvents= async()=>{
        try{
            const events = await Event.find()
            return events;
        }catch(err){
            console.log(err)
        }
    }


}


module.exports=new EventService();