const express = require("express");
const { engine } = require('express-handlebars');
const employeeController = require("./controller/employeeController");
var app = express();
require('dotenv').config();
require("./models/db");

let PORT = process.env.PORT; 

app.set('port', PORT || 5050);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views')
app.use("/employee", employeeController);
app.get('/', (req,res)=>{
    res.redirect("/employee");
})
app.listen(PORT, () => {
  console.log("Server is listening on Port:", PORT);
});