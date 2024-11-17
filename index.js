require("dotenv").config()
const express = require("express")
const mongoose=require("mongoose")
const newrouter = require("./Routes/routes");
const Url=require("./model/urls")
const Myuser=require("./model/user")
const staticrouter=require('./static')
const userrouter=require('./newstatics')
const loginrouter=require("./loginstatics")
const app=express();  
const path=require("path")
mongoose.connect(process.env.MONGODB_URL || process.MONGODB_URL_LOCAL).then(()=>console.log("mongoose connected"))
//body parsers
const { nextTick } = require("process");
 const {Restricttouser}=require("./middleware/auth");
const { url } = require("inspector");
const cookieparser=require("cookie-parser");
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//Routes
app.use("/url/convert",newrouter)
app.set("view engine","ejs")
app.set("user",'view',"login",path.resolve("./views"))
app.use('/home',staticrouter)
app.use("/create/user",userrouter)
app.use('/',loginrouter)
app.get("/:shortenurl",async(req,res)=>
{
     let url=await Url.findOne({...req.params})
     res.redirect(url?.redirecturl)
    
})
console.log(process.env.PORT)
const PORT= process.env.PORT || 8001
app.listen(PORT,()=>console.log("starting"))