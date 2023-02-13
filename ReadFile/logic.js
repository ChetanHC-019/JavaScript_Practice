const fs=require('fs')

fs.readFile('./sample.txt','utf8',(error,data)=>{
 if(error) throw error
 else
 console.log(data)
})