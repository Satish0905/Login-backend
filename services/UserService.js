const DataModels = require("../models/User");
var jwt = require('jsonwebtoken');

const UserService=function(){

    this.checkEmailExistOrNot=async(email)=>{
        return await DataModels.find({
            email:email
        })
    }
    this.checkMobilenumberExistOrNot=async(mobilenumber)=>{
        return await DataModels.find({
            mobilenumber:mobilenumber
        })
    }

    this.checkEmailIdExistOrNot=async(email)=>{
        return await DataModels.find({
            email:email
        })
    }
    this.checkPasswordExistOrNot=async(password)=>{
        return await DataModels.find({
            password:password
        })
    }


this.checkUserExistOrNot=async({email,password})=>{
   const user = await DataModels.find({ 
    email,
    password
    })
    return user
}

this.generateToken = async({id,email})=>{
    let token = jwt.sign({id:"satish"}, "token", {
        expiresIn: "7d",
      });
      return token;
}

}
module.exports=new UserService();