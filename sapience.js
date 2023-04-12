                                // function init() {
//     var name = 'Mozilla'; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();
                 

// initialize=()=>{
//     var user_name="Falcon Knight"
//     displayName=()=>{
//         console.log(user_name)
//     }
//     displayName()
// }

// initialize()

// if (Math.random() > 0.5) {
//     var x = 1;
//   } else {
//     var x = 2;
//   }
//   console.log(x);

// randomMath=()=>{
//     var num=Math.random()
//     console.log(num)
// }


// for(var i=0;i<=100;i++){
//     randomMath()
// }

// init=()=>{
//     const userName="The song of Ice and Fire"
//     display_title=()=>{
//         console.log(userName)
//     }
//     return display_title
// }

// const initref=init()
// initref()

// AddNumFun=(x)=>{
//    return realFun=(y)=>{
//     return x+y
//    }
// }

// const add10=AddNumFun(10)
// const add20=AddNumFun(20)

// console.log(add10(1))
// console.log(add10(2))


// global scope
// var e=10
// function sum(a){
//   return function(b){
//       return function(c){
//          // outer functions scope
//         return function(d){
//             //local scope
//             return a+b+c+d+e
//         }
//       } 
//   }
// }         

// console.log(sum(1)(2)(3)(4))
          
// const a=10
// function sum(b){
//     return function(c){
//         return  function(d){
//             return a+b+c+d
//         }
//     }
// }
// console.log(sum(1)(2)(3))

// const a=10

// {
//     let b=100
// }

// console.log(a)
// console.log(b)

//scope chain means one variable has a scope (local/global) and it is used by another variable/function having another scope

//---------------------------------------------------------------------------------------------------------------

//global variable
// var global_variable="Globe"

// function main_fun(){

//     //Local variable
//     var local_variable="Local"

//     function first_function(){
//         console.log(local_variable)
//     }

//     function second_function(){
//         console.log(global_variable)
//     }

//     first_function()
//     second_function()
// }

// main_fun()

// var paintColor="Red";

// const paint=(()=>{

//     return {
//         changeColorToBlue:()=>{
//             paintColor="Blue";
//             return paintColor
//         },
//         changeColorToGreen:()=>{
//             paintColor="Green";
//             return paintColor
//         }
//     }
// })();

// console.log(

// )

// (function self_invoked(){
//     var f_name="optimus";
//     var l_name="Prime";
//     console.log(`${f_name} ${l_name}`)
// })()

// (()=>{
//   var a=10;
//   var b=20;
//   console.log(a+b)
// })();

//  var U_name="Shibu shankar";

// (()=>{
//     const greet="Hello"
//    console.log(`${greet} ${U_name}`)
// })();

//  const first=()=>{
//     var num1=10
//     const second=()=>{
//         var name="Shri"
//         console.log(num1)
//     }
//     return second
// }

// var fun=first()
// fun()

// const first_fun=()=>{
//     var num1=100;
//     const second_fun=(num2)=>{
//         console.log(num1+num2)
//     }
//     return second_fun
// }

// const add=first_fun()
// add(200)


// const greet=(name)=>{
//     console.log(`Hello ${name}`)
// }

// const set_name=(callback)=>{
//     u_name="Jack reach"
//    callback(u_name)
// }

// set_name(greet)


// fun1=(name)=>{
//   const greet="Hello"
//   console.log(`${greet} ${name} Welcome to IRCTC website`)
// }

// fun2=(callbackfun)=>{
//   Name="Prashanth";
//   callbackfun(Name)
// }

// fun2(fun1)


// const promise=new Promise((resolve,reject)=>{
//     isNameExists=false;
//     if(isNameExists){
//         resolve("User name exists")
//     }
//     else{
//         reject("error")
//     }
// })

// promise.then(result=>console.log(result))
// .catch(()=>{
//     console.log();
// })

// const fetch_posts=async()=>{
//     const response=await fetch('https://jsonplaceholder.typicode.com/posts')
//     const posts= await response.json()
//     console.log(posts)
// }
// fetch_posts()

// const promise=new Promise((resolve,reject)=>{
//     isNameExist=1
//     if(isNameExist){
//         resolve("User name Exist")
//     }
//     else{
//         reject("error")
//     }
// })

// promise.then((result)=>{
//    console.log(result)
// }).catch(()=>{
//     console.log("Error !!")
// })

// const getPosts=async()=>{
//     const resourse= await fetch('https://jsonplaceholder.typicode.com/users')
//     const posts=resourse.json()
//     console.log(posts)
// }

// getPosts()
 
// const parentFun=()=>{
//     const title="The Smiling Knight";
//     const childFun=()=>{
//         console.log(title)
//     }
//     childFun()
// }

// parentFun()



// bahuparak=(call)=>{
//     title="The laughing Storm"
//   console.log(`${call} is ${title}`)
// }

// namedFun=(callBack)=>{
//     Name="loynel Baratheon";
//     callBack(Name)
// }

// namedFun(bahuparak)

// sampleFun=()=>{
//     const a=10;
//     testFun=()=>{
//         const b=20;
//         console.log(a)
//     }
// console.log(b)
// testFun()
// }

// sampleFun()

// const promise=new Promise((res,rej)=>{
//   const isNameExist=false
//   if(isNameExist){
//         res("User Name Exits")
//   }
//   else{
//     rej("Error")
//   }
// })

// promise.then((result)=>{
//    console.log(result)
// }).catch(()=>{
//    console.log("Error !!")
// })

// const promise=new Promise((resolve,reject)=>{
//     isWorldExists=1
//     if(isWorldExists){
//         resolve("Hello World");
//     }
//     else{
//         reject("No world to Show")
//     }
// })

// promise.then((result)=>{
//    console.log(result)
// }).catch((error)=>{
//    console.log(error)
// })

//  resourse =async()=>{
//     const actualData= await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data=actualData.json();
//     console.log(data)
// }
// resourse()

// const getPosts=async()=>{
//     const resourse= await fetch('https://jsonplaceholder.typicode.com/users')
//     const posts= resourse.json()
//     console.log(posts)
// }

// getPosts() 

// const promise=new Promise((resolve,reject)=>{
//     isnumExisted=true;
//  isnumExisted ? resolve("num exists") : reject(error)
// })
// promise.then((result)=>{
//     console.log(`result :${result}`)
// }).catch(()=>{
//     console.log("Error occured")
// })

// let promise=new Promise((resolve,reject)=>{
//    let resoure=fetch("https://jsonplaceholder.typicode.com/posts");
//      if(resoure){
//         resolve(resoure)
//      }
//      else{
//         reject(resoure)
//      }
// })

// promise.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//    console.log(error)
// })



// var num1=0,num2=1; result=0;
// console.log(num1)
// console.log(num2)
// for(let i=2;i<=20;i++){
//     result=num1+num2;
//     num1=num2
//     num2=result;  
//     console.log(result)
// }


// var num1=0,num2=1;result=0;
// console.log(num1)
// console.log(num2)

// for(let i=2;i<=15;i++){
//    result=num1+num2;
//    num1=num2;
//    num2=result;
//    console.log(result)
// }


// let human={
//     name:"Rakesh"
// }
// let animal={
//     species:"Monkey"
// }

// Object.freeze(human)
// Object.freeze(animal)

// human.name="Amit"
// animal.species="Dolphin"

// console.log(human.name)
// console.log(animal.species)

///////////yyfyyyyyyyygfgggfytgjfj

// myArray=[1,"Tiger",true,undefined,null]

// for(let i in myArray){
//     console.log(i)
// }

// const person={
//     name:"Ramu",
//     id:"KOH1E44",
//     country:"India"
// }

// for(let [key,value] of Object.entries(person)){
//     console.log(`${key} : ${value} `)
// }

// let obj=JSON.parse(
//     '{"name":"raju","age":30,"city":"yelatti"}'
//     )

// console.log(obj)

// const text = '["Ford", "BMW", "Audi", "Fiat"]';
// console.log(JSON.parse(text))


// const person={
//     name:"Ramu",
//     id:"KOH1E44",
//     country:"India"
// }

// console.log(JSON.stringify(person))bghhgfhfhtbghfjgjgj
//fghfjfjfjfjdgfjghjgjcghfghfjftmjjfhhhhhhhhhhhhhhhhhhhhhgghnyhmymynthyuguyf
//jufftyyyydddjfhfffjfjywefwrtgrhretegeefergedfbdbbbfdtghntnhfhdfhjgrbkjghwkhgerjghghththjgjyhfjhf
//uwduiwww