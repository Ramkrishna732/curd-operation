const express = require("express");
var app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res)=>{
    res.send('testing deployement...');
    res.end();
})
// custom 404 page
app.use((req, res) => {
    res.status(404);
    res.render('404')
});

// custom 500 page
app.use((err, req, res, nex) => {
    console.err(err.stack);
    res.status(500);
    res.render('500')
});

app.listen(app.get("port"), () => {
  console.log("Server is listening on Port 5000");
});
