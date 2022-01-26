const mongoose = require('mongoose');
require('./employee.model');
const url = process.env.MONGODB_LOCAL||process.env.MONGODB_CLOUD

mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})