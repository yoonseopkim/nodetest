//index.js

let express = require("express");
let app = express();

app.listen(80, function(){
    console.log("App is running on port 80");
});

app.get("/", function(req, res){
    res.sendfile("index.html");
});