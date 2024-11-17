const express=require("express")
const router=express.Router()
const shortid=require("shortid")
const userurl=require("../model/urls")
const { handlechangeurl } = require("../controller/user")
router.post("/",async(req,res)=>
{
    const url=req.body.url;
    if(url.endsWith('/')) return res.render("error",{nerror:'Please Enter the Valid Url'})
     else  if(req.body.url)
     {     const newid=shortid(8);
     await userurl.create({
          shortenurl:newid,
          redirecturl:url   
     })
     
     res.render('home',{id:newid?newid:''})
}
})
module.exports=router
