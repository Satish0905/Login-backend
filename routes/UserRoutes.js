const express =require("express");
const UserController=require("../controller/UserController");

module.exports=(()=>{
    const router=express.Router();

    router.post("/register",UserController.CreateUserController);
    
    router.post("/login",UserController.CreateUserlogin);

    return router;
})();