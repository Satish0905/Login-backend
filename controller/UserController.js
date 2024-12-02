const Event = require("../models/Event");
const DataModels = require("../models/User");
const UserService = require('../services/UserService')

const UserController=function(){
    this.CreateUserController=async(req,res)=>{
        const {email,mobilenumber}=req.body;
        if(!email){
            return res.status(301).send({
                status:301,
                message:"Email is required",
                data:[]
            })
        }
        if(!mobilenumber){
            return res.status(301).send({
                status:301,
                message:"Mobilenumber is required",
                data:[]
            })
        }

        let result=await UserService.checkEmailExistOrNot(email);
        if(result.length>0){
            return res.status(406).send({
                status:406,
                message:"Email already exists",
                data:[]
            })
        }
        let result1 = await UserService.checkMobilenumberExistOrNot(mobilenumber);
        if(result1.length>0){
            return res.status(406).send({
                status:406,
                message:"Mobilenumber already exists",
                data:[]
            })
        }
        DataModels.create(req.body)
        .then(register=> {
            console.log(register);
        return res.json(register)
        })
        .catch(err=>res.json(err))
    }
       
    this.CreateUserlogin=async(req,res)=>{
        const {email,password} = req.body
        if(!email){
            return res.status(301).send({
                status:301,
                message:"EmailId is required",
                data:[]
            })
        }
        if(!password){
            return res.status(301).send({
                status:301,
                message:"Password is required",
                data:[]
            })
        }
        const user = await UserService.checkUserExistOrNot({email,password});
        if(user.length==0){
            res.status(402).send({
                status:402,
                message:"No user found",
                data:[]
            })
        }
        else{
            const token = await UserService.generateToken({id:user._id,email:user.email})
            res.status(201).send({
                status:201,
                message:"Success",
                data:{
                    token:token,
                    user:user
                }
            })
        }
    }

    this.Createaddevent = async(req, res) => {
        const { eventName, eventDate } = req.body;
        try{
            console.log(req.body)
        await Event.create(req.body)
        res.status(201).json({ message: "Event created successfully", data: { eventName, eventDate } });
        }catch(err){
            console.log(err)
        }
    };


    // models(event.js->same as user.js->event.create)
    
}
module.exports=new UserController();