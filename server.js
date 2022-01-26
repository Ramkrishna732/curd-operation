const express = require("express");
require('dotenv').config();

var app = express();
const { engine } = require('express-handlebars');
const employeeController = require("./controller/employeeController");
require("./models/db");

app.set('port', process.env.PORT || 3000);
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
app.use(express.urlencoded());
app.use(express.json());
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views')
app.use("/employee", employeeController);
app.get('/', (req,res)=>{
    res.redirect("/employee");
})
app.listen(app.get('port'), () => {
  console.log("Server is listening on Port:", app.get('port'));
});