const mongoose=require('mongoose')
async function    mongodbconnect(url) {
      return mongoose.connect(url).then(()=>console.log('connected'))
}
module.exports={mongodbconnect}