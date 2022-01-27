const mongoose = require("mongoose");
require("./employee.model");
const url = process.env.MONGODB_CLOUD || process.env.MONGODB_LOCAL

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  
}).then(()=>{
    console.log("db connected success");
}).catch((err)=>{
    console.log(err);
})