const mongoose=require("mongoose")
const { use } = require("../static")
const userschema=new mongoose.Schema(
    
    {
        name:{
            type:String,
            required:true,
        },
       Email:
        {
            type:String,
            required:true,
            unique:true
            
        },
        password:
        {
             type:String
        },
        role:
        {
            type:String,
            required:true,
            default:"normal"
        }
        }
    
)
const newuser= mongoose.model('newuser',userschema)
module.exports=newuser