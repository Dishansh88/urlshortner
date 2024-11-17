const express=require('express')
const router=express.Router()
const {handleuser}=require("./controller/user")
router.get("/",(req,res)=>
{
    res.render('user')
})

router.post('/',(handleuser))
module.exports=router