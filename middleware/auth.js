const {setuser,getuser}=require("../service/auth")
async function  Restricttouser(req,res,nextTick) {
              console.log('lloo')
          const userid=req.headers?.cookie
          const token=userid?.split("uid=")[1]
          const user=getuser(token)
          if(!user) return res.redirect('/login/user')
          req.user=user;
          nextTick()
          // const userid=req.headers['authorization']
          // console.log(req.headers)
          // const token=userid?.split('Bearer ')[1]
          // console.log(token)
          
          //   const user=getuser(token)
          //   console.log(user)
          //   if(!user) return res.redirect('/login/user')
          //   req.user=user;
          //   nextTick();
    //         if(!user)return res.redirect('/login/user')
    //     req.user=user;
    //   nextTick()
}
module.exports={Restricttouser}