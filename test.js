const express = require("express");
var app = express();

app.get('/', (req, res)=>{
    res.send('testing deployement...')
})
app.listen(5000, () => {
  console.log("Server is listening on Port 5000");
});
