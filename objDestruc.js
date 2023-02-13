// var user={
//    MyName:"Tony",
//    Email:"StarkTony@gmail.com"
// }

const { isLiteralTypeNode } = require("typescript");

// const {Name:MyName,email:Email}=user
// console.log(MyName)

// var fun1=()=>{
//     userName="Shiva",
//     userId="8WSe981",
//    userLocation="banglore"
// }
// var {userName,userId,userLocation}=fun1()

// console.log(userName)

// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// expected output: 10

// console.log(b);
// expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// [a,b, ...rest]=[100,200,"Ram","Bhim","Shyam"]

// console.log(a);
// console.log(b);

// console.log(rest);
// expected output: Array [30,40,50]

// let myArray=["Hello",102924,true,"John",3.1738]

// let [greet,num,bool]=myArray

// console.log(myArray[0],myArray[1],myArray[2])
// console.log("-------------------------------------")
// console.log(greet,num,bool)

// const obj={ a:1,b:{c:2}}
// const { a, b: { c: d } } = obj;
// console.log(a)
// console.log(d)

const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a is constant
let { b: { c: d } } = obj; // d is re-assignable

console.log(a)
console.log(d)





