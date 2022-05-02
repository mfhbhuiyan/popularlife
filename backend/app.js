const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");
const fileUpload = require("express-fileupload");

//config

if(process.env.NODE_ENV !=="PRODUCTION"){
   require("dotenv").config({path:"backend/config/config.env"});
}


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Router Imports

const user = require("./routes/userRoute");

const orlist = require("./routes/orRoute");

const path = require("path");


app.use("/app/vi",user);
app.use("/idra-ump.com",orlist);     

app.use(express.static(path.join(__dirname,"../frontend/build")));
app.get("*",(req,res)=>{
   res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"));  
})
 
//Middleware for Errors

app.use(errorMiddleware);
 
module.exports = app;
 