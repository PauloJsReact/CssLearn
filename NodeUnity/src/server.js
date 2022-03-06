const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port ="3000";

app.get('/',function(req,res,next) {
    res.status(200).send("hello word!!");
});

app.get('/player',function (req,res,next) {
    res.status(200).send("<h1>Players!</h1>")
})


app.listen(port,function(){
    console.log(`Server listering on port ${port} ...`);
})