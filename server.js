const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const UserRoutes = require("./routes/UserRoutes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization,client_host"
  );
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader(
    "Access-Control-Expose-Headers",
    "X-Api-Version, X-Request-Id, X-Response-Time"
  );
  res.setHeader("Access-Control-Max-Age", "1000");
  next();
});

mongoose.connect("mongodb+srv://satishuppala:Rksatish@cluster0.i4hwuhn.mongodb.net/login")
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error', err);
  });

app.use(UserRoutes);

app.listen(8000, () => {
  console.log(`Server is running at http://localhost:8000`);
});
