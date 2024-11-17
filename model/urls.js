const mongoose=require("mongoose")
const newuser = require("./user")
const uerschema=new mongoose.Schema(
    
    {
        shortenurl:{
            type:String,
            required:true,
            unique:true
          
        },
        redirecturl:
        {
            type:String,
            required:true
            
        },
        visitedhistory:
        [
            {timestamp:{type:Number} }  
        ],
        createdBy:
       {
               type:mongoose.Schema.ObjectId,
               ref:"newuser"
        }
    },
    {timestamps:true}
        
)
const Url=mongoose.model("user",uerschema)
module.exports=Url