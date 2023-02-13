const fs=require('fs')

let a=10,b=20,c=30,d=40;
let total=a+b+c+d;
 let sum=total.toString()

fs.writeFile('./show.txt',sum,(err)=>{
 if(err)
 console.log(err)
 else
 console.log(sum+" texted in show.txt")
})
