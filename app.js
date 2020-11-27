var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");
const port = 3000;
app.get("/",function(req,res){
     res.render("search");
});

app.get("/result",function(req,res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s="+query+"&apikey=thewdb";
    //console.log(url);
    request(url,function(error,response,body)
    {
        if(error===null && response.statusCode===200)
        {
            var data = JSON.parse(body);
            res.render("movie",{data:data});
           // res.send(data);
           //console.log(data);
        }
        //console.log("hi there");
    });
});
app.listen(port,()=>{
    return console.log('Example app listening at http://localhost:${port}');
})