const express = require("express");
const { engine } = require('express-handlebars');
const employeeController = require("./controller/employeeController");
require("./models/db");
var app = express();

app.set('port', process.env.PORT || 3000);
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
app.listen(app.get('port'), () => {
  console.log("Server is listening on Port:", app.get('port'));
});