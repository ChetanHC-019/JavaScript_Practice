const express=require('express')
const http=require('http')
const bodyParser=require('body-parser')
const path=require('path')
var indexController=require('./indexController')


let app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/webapi',indexController)

// app.get('/',(req,res,next)=>{
//     res.send("<h1>Home page </h1>")
//   })

// app.get('/aboutus',(req,res)=>{
//   res.send("<h1>ABOUT US </h1>")
// })

var server=http.createServer(app)
server.listen(4000,(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
     console.log("server invoked at http://localhost:4000")
    }
})
