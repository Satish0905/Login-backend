const express =require("express");
const UserController=require("../controller/UserController");
const EventController = require("../controller/EventController");

module.exports=(()=>{
    const router=express.Router();

    router.get("/",(req,res)=>{
        res.send("working");
    });

    router.post("/register",UserController.CreateUserController);
    
    router.post("/login",UserController.CreateUserlogin);

    router.post("/addevent",UserController.Createaddevent);

    router.get('/events',EventController.getEvents);

    // router.delete('/deleteevent/:id',EventController.deleteEvent);

    // router.put("/updateevent",EventController,updateEvent);

    return router;
})();