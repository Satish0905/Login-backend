const DataModels = require("../User/Data");

const UserController=function(){
    this.CreateUserController=async(req,res)=>{
        DataModels.create(req.body)
        .then(register=> {
            console.log(register);
        return res.json(register)
        })
        .catch(err=>res.json(err))
    }

    this.CreateUserlogin=async(req,res)=>{
        DataModels.find(req.body)
        .then(user=> {
          console.log(user);
        return res.json(user)
        })
        .catch(err=>res.json(err))
    }
}
module.exports=new UserController();