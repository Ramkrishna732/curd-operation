require("./models/db");
const express = require("express");
const path = require("path");
const expressHandlebars = require("express-handlebars");
const employeeController = require("./controller/employeeController");
var app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.set("views", path.join(__dirname, "/views/"));
app.engine(
  "hbs",
  expressHandlebars({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts/",
  })
);
app.set("view engine", "hbs");
app.use("/employee", employeeController);
app.get('/', (req,res)=>{
    res.redirect("/employee")
})
app.listen(5000, () => {
  console.log("Server is listening on Port 5000");
});
