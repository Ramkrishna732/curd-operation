require("./models/db");
const express = require("express");
const path = require("path");
const { engine } = require('express-handlebars');
const employeeController = require("./controller/employeeController");
var app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views')
app.use("/employee", employeeController);
app.get('/', (req,res)=>{
    res.redirect("/employee")
})
app.listen(5000, () => {
  console.log("Server is listening on Port 5000");
});
