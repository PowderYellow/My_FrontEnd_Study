
var expresss = require("express");
var app = expresss();
app.get("/", function (req, res) {
  res.send("Hello world!");
});
app.get("/customer",function(req,res){
    res.send("customer")
})
app.listen(3000);