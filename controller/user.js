const { Restricttouser } = require("../middleware/auth")
const newuser=require("../model/user")

async function handleuser(req,res) {
     const {name,Email,password}=req.body
          let e=await newuser.findOne({Email})
         if(!e) 
            {
               await  newuser.create({
                  name:req.body.name,
                  Email:req.body.Email,
                  password:req.body.password
               })
               return res.render('home')
            
            }
         else return res.render("error",{error:'Email has Already registered',path:""})
       
        

     }
    

module.exports={handleuser}