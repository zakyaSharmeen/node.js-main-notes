const mongoose = require("mongoose")

// CONNECT
async function connectMongoDb(url){
    return mongoose.connect(url)
    .then(() => console.log("mongoose connected"))
    .catch((err) => console.log("mongoose Error", err))
    
    
   
}
module.exports = {
    connectMongoDb
}