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

    this.deleteEvent = async () => {
        try {
          const result = await Event.findByIdAndDelete(id);
          if (!result) {
            throw new Error("Event not found");
          }
          return { message: "Event deleted successfully", event: result };
        } catch (err) {
          console.log("Error deleting event:", err);
          throw err;
        }
      };

}


module.exports=new EventService();