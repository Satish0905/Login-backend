const EventService = require("../services/EventService")

const EventController=function(){
    this.getEvents=async(req,res)=>{
        const events = await EventService.getEvents()
        res.json({events:events})
    }

    this.deleteEvent=async(req,res)=>{
        const {id}=req.params;
        const result = await EventService.deleteEvent(id);
        return res.status(200).send({
            status:200,
            message:"Message: Event deleted successfully",
            data:[]
        })
    }

    this.updateEvent=async(req,res)=>{
        const { id } = req.params;
        const { eventName, visibility, category, startDate, endDate, eventType, minSeats } = req.body;
        try {
            const updatedEvent = await Event.findByIdAndUpdate(
            id,
            { eventName, visibility, category, startDate, endDate, eventType, minSeats },
            { new: true }
        );
        res.status(200).json(updatedEvent);
        } catch (err) {
            console.error(err);
        res.status(500).send({ error: 'Failed to update event' });
        }
    }
    
}

module.exports = new EventController()