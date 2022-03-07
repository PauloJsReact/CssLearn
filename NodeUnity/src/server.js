const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port ="3000";

app.get('/',function(req,res,next) {
    res.status(200).send("hello word!!");
});


//player metodo
app.get('/player',function (req,res,next) {
    res.status(200).send("<h1>GET</h1>")
})

app.post('/player', function (req,res,next) {
    res.status(200).send("<h1>POST</h1>");
});

app.put('/player',function(req,res,next) {
    res.status(201).send("<h1>PUT</h1>");
})

app.delete('/player',function(req,res,next) {
    res.status(200).send("<h1>DELETE</h1>")
})

app.listen(port,function(){
    console.log(`Server listering on port ${port} ...`);
})