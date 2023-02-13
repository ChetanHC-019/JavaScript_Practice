const express=require('express')
const router=express.Router()
//var indexModel=require('./indexModel')

router.get('/',(req,res,next)=>{
    res.send("<h1> WEB route invoked </h1>")
})

router.get('/aboutus',(req,res,next)=>{
    res.send("<h1> ABOUT US route invoked </h1>")
})

module.exports=router