const express =require("express");
const mongoose=require("mongoose");
const app=express();
const DataModels=require("./models/Data");
const cors=require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://satishuppala:Rksatish@cluster0.i4hwuhn.mongodb.net/login"
  ).then(() => {
    console.log('MongoDB connected');
  }).catch(err => {
    console.error('MongoDB connection error', err);
  });
  
  app.post("/register",(req,res)=>{
    DataModels.create(req.body)
    .then(register=> {
      console.log(register);
  return res.json(register)
  })
    .catch(err=>res.json(err))
  })

  app.post("/login",(req,res)=>{
    DataModels.find(req.body)
    .then(user=> {
      console.log(user);
  return res.json(user)
  })
    .catch(err=>res.json(err))
  })

  app.use(express.json());
  
  app.get('/', (req, res) => {
    res.send('Welcome to the backend');
  });
  
  app.listen(8000, () => {
    console.log(`Server is running at http://localhost:8000`);
  });