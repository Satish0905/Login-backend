const EventService = require("../services/EventService")

const EventController=function(){
    this.getEvents=async(req,res)=>{
        const events = await EventService.getEvents()
        res.json({events:events})
    }



}

module.exports = new EventController()