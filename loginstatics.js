const {v4:uuidv4}=require("uuid")
const cookie=require('cookie-parser')
const {setuser,getuser}=require("./service/auth")
const express=require('express')
const router=express.Router()
const newuser=require("./model/user")
router.get("/",(req,res)=>
{
    res.render('login')
})
  // router.post("/",async(req,res)=>
  //   {
  //     const name=req.body.name
  //     const password=req.body.password
  //     const user=await newuser.findOne({name,password})
  //    console.log(user)
  //     if(!user)
  //     {
  //        res.send(<button>click here to </button>)
  //       }
  //       else if(user)
  //       {
           
  //            const token=setuser(user)
  //           //  res.cookie("uid",token)
  //           console.log(token)
  //           // res.json({token})
  //           res.render('home')
      
  //     }
  //   }
  // )

  
      
  router.post("/",async(req,res)=>{
  const name=req.body.name
  const password=req.body.password
  const userfinded= await newuser.findOne({name,password})
  console.log(userfinded)
  if(!userfinded)
  {
     res.render('user',{error:"You have to Create Account first"});
    }
 else 
    {
        const token=setuser(userfinded)
           res.cookie('uid',token)
      // res.json({token})
           res.redirect('home')
    }

    
    }

  )
module.exports=router