const DataModels = require("../models/User");
var jwt = require('jsonwebtoken');

const UserService=function(){

// this.checkFirstnameExistOrNot=async({firstname})=>{

// }

this.checkUserExistOrNot=async({email,password})=>{
   const user = await DataModels.find({ 
    email,
    password
    })
    return user
}

this.generateToken = async({id,email})=>{
    var token = jwt.sign({id,email }, 'satishsecretkey');
    return token
}

}
module.exports=new UserService();