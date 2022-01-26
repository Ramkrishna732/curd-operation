const mongoose = require("mongoose");
require("./employee.model");
// const url = process.env.MONGODB_LOCAL||process.env.MONGODB_CLOUD
const url = process.env.MONGODB_CLOUD;

mongoose.connect(url, {
    useNewUrlParser: true,
   // useFindAndModify: false,
    useUnifiedTopology: true
  
}).then(()=>{
    console.log("db connected success");
}).catch((err)=>{
    console.log(err);
})
