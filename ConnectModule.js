var connect=require('connect')
var app=connect()

var logger=function(req,res,next){
    console.log(req.method,req.url);
    next();
}

var HelloWorld=function(req,res,next){
 res.setHeader('content-type','text/plain')
 res.end("Hello world")
}

var ByeWorld=function(req,res,next){
    res.setHeader('content-type','text/plain')
    res.end("Bye world")
   }

app.use(logger)
app.use('/hello',HelloWorld)
app.use('/bye',ByeWorld)
app.listen(3000)
console.log("server is running at port 3000")