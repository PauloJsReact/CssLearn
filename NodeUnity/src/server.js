const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port ="3000";

app.listen(port,function(){
    console.log(`Server listering on port ${port} ...`);
})