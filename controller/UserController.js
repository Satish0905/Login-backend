const DataModels = require("../models/User");
const UserService = require('../services/UserService')

const UserController=function(){
    this.CreateUserController=async(req,res)=>{
        // const firstname = create(req.body)
        // const user =await UserService.checkFirstnameExistOrNot({firstname});
        DataModels.create(req.body)
        .then(register=> {
            console.log(register);
        return res.json(register)
        })
        .catch(err=>res.json(err))
    }

    this.CreateUserlogin=async(req,res)=>{
        const {email,password} = req.body
        const user = await UserService.checkUserExistOrNot({email,password});
        if(user.length==0){
            res.status(400).send({
                status:400,
                message:"User Doesn't Exist",
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
}
module.exports=new UserController();