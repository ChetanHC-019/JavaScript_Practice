// getValue=(condition)=>{
    
//     if(condition)
//     {
//         let value='blue'
//        // return value;
//         console.log(value)
//     }
//     else{
//         //return null;
//        console.log("false "+value)
//     }
    
// }

// getValue(0)
// //console.log(value)


    // var num=20;
    // {
    // let num=100;
    // console.log(num)

    // }
    // console.log(num)
//{
// const string="hello"
// //string="hii"
// }
// console.log(string)

// const Student={
//     name:"stuart",
//     age:24
// }
// Student.name="Edward"

// Student={
//     name:"Ram",
//     age:25
// }

// const fun1=()=>{
//   console.log(value)
//     let value="blue";
//     //console.log(value)
// }

// fun1()

// for(let i=0;i<=10;i++){
//     console.log(i)
// }

// console.log("last item "+i)

// var NumArray=[];

// for(let i=0;i<10;i++)
// {
//    NumArray.push(()=>{
//        console.log(i)
//    })
// }

// NumArray.forEach(function(arr){
//     arr()
// })

//console.log(typeof(NumArray))


// var funcs = [];
// for (let i = 0; i < 10; i++) {
//  funcs.push((function(value) {
//      return function(){
//  console.log(value);
//      }
//  }(i)));
// }
// funcs.forEach(function(func) {
//  func(); // outputs the number "10" ten times
// });


// let FruitArray=[];

// object={
//     apple:"red",
//     mango:"green",
//    pineApple:"yellow"
// }

// for(const key in object){
//     FruitArray.push(()=>{
//         console.log(key)
//     })
// }

// FruitArray.forEach(function(func){
//       func()
//  })



// var RegExp = "Hello!";
// console.log(window.RegExp); // "Hello!"
// var ncz = "Hi!";
// console.log(window.ncz); // "Hi!"

// let text="abc"
// console.log(text.charCodeAt(0));
// console.log("code poitn at "+text.codePointAt(0))

// function is32Bit(c) {
//     return c.codePointAt(0) > 0xFFFF;
//    }
//    console.log(is32Bit("𠮷")); // true
//    console.log(is32Bit("a")); // false

//console.log(String.fromCodePoint(104099));
 
// const Student={
//   s_name:"Vijay",
//   s_age:24,
//   s_roll_no:"1TG0192"
// }

// const sampleFunction=()=>{
//     console.log("sample Function called")
// }


// const Array=["hello" ,23,true,23179.376,null]


// console.log("Student of type "+typeof(Student))
// console.log("sampleFunction of type "+typeof(sampleFunction))
//console.log("Array of type "+typeof(Array))

// sampleFunction=(a,...b)=>{
//     let c=a+b
//     console.log(c)
//   console.log(typeof(c))
// }

// sampleFunction("hello",55,0,true)

// const a=10;
//  b=''

// console.log(isNaN(a))
// console.log(isNaN(b))

// const Parseing=(a,b)=>{
// const num1=parseInt(a,25)
// const num2=parseInt(b,25)
//  const sum=num1+num2
// console.log(typeof(sum))
// console.log(sum)
// }

// Parseing("10","9");

// const toDayDate=new Date()
// console.log(String(toDayDate))
// var num=10;
// num+=5//same as that of num=num+5
// console.log(num)

// var myVar=20;
// myVar*=5//same as that of myVar=myVar*5
// console.log(myVar)

// var number=100
// number/=5//same as that of number=number/5
// console.log(number)

// const sample=12
// if(isNaN(sample)){
//     console.log("sample is not a number")
// }
// else{
// console.log("sample is a number")
// }


// var num=10
// while(num>=0){
    
//     if(num>0){
//        console.log(num+" is greater than 0")
    
//     }
//     else if(num==0){
//     console.log(num+" is equal t0 0")
//     break;
//     }
//     --num
// }

// for(var i=0;i<=10;i++){
//      if(i==5 || i==3)
//      {
//          console.log("numbers is "+i)
//          continue;
//      }
//      else{
//          console.log("number is "+i)
//      }
// }

// let firstName=10;
// let secondName=20;
// console.log(`Sum :`+(firstName+secondName))

// console.log(Math.PI)

// let a="10"
// let b="-10"
// console.log(a-b)

// let num="90"
// let num1="90"
// console.log(num*num1)

// let e_name="ABRAHAMLINCOLN"
// console.log(e_name.toLowerCase())

// let f_name="RajaRamMohanRoy";
// console.log(f_name.slice(0))

// let nonVeg="chikken mutton fish prawns crabs";
// let meatArray=nonVeg.split("i");
// console.log(typeof(meatArray))
// console.log(meatArray)

// let riceArray=[]

// let rf1=["pulao",{price:60,status:"available"}];
// let rf2=["ghee rice",{price:70,status:"available"}];
// let rf3=["lemon rice",{price:45,status:"available"}];
// let rf4=["fried rice",{price:58,status:"available"}];
// let rf5=["egg fried rice",{price:65,status:"available"}];
// let rf6=["gobi rice",{price:76,status:"available"}];

// riceArray.push(rf4);
// riceArray.push(rf2);
// riceArray.push(rf1);
// riceArray.push(rf6);
// riceArray.push(rf5);
// riceArray.push(rf3);


// console.log(riceArray)

// let student={
//     f_name:"Ranga",
//     l_name:"billa",
//     roll_no:"1Asmpn1012",
//     batch:2013
// }

// let {f_name,l_name,roll_no,batch}=student


// console.log("student first name : "+f_name)
// console.log("student last name : "+l_name)
// console.log("student roll_no : "+roll_no)
// console.log("student batch : "+batch)

// let id,name,salary,location
// class Student{

//     constructor(id,name,salary,location){
//         this.id=id;
//         this.name=name;
//         this.salary=salary;
//         this.location=location;
//     }

//     getDetails(){
//         return ` ${this.id} ${this.name} ${this.salary} ${this.location}`
//     }


// }

// let s1=new Student(10111,"Shankar",34000,"Kashi")
// let s2=new Student(10222,"venki",32000,"tirupati")
// console.log(s1.getDetails())
// console.log(s2.getDetails())

// let Emp_id,Emp_name,Emp_salary,Emp_batch,Emp_location
// class Employee{

//     setDetails(Emp_id,Emp_name,Emp_salary,Emp_batch,Emp_location)
//     {
//         this.Emp_id=Emp_id;
//         this.Emp_name=Emp_name;
//         this.Emp_salary=Emp_salary;
//         this.Emp_batch=Emp_batch;
//         this.Emp_location=Emp_location;
//     }

//     getDetails(){
//         return `Employee Id:${this.Emp_id}
//                 Employee Name:${this.Emp_name}
//                 Employee Salary:${this.Emp_salary}
//                 Employee Batch:${this.Emp_batch}
//                 Employee Location:${this.Emp_location}`
//     }

// }

// let Emp1=new Employee()
// Emp1.setDetails("1198371","Babu Rao",12000,"JEE full satck","Pune")
// let Emp2=new Employee()
// Emp2.setDetails("1216212","Devi sri",14000,"Python full satck","Banglore")

// console.log(Emp1.getDetails())
// console.log(Emp2.getDetails())


// let Car=new Object();
// Car.maxspeed=150;
// Car.driver="Tony Stark";
// Car.drive=(distance,time)=>{console.log(Car.driver+" maxspeed "+Car.maxspeed+" and  driving @ "+distance/time+"km/hr")};

// Car.drive(100,2)

// let date=new Date()
// console.log(date)

// {
//    let a=20;
//      a=30
//      console.log(a)
// }

// let str1="Jhonny";
// //let srt2; 
//  str2="Depp";

// console.log(`Name is ${str1} ${str2}`)

// let str2
 
//str2="Depp";

// const findName=(f_Name,l_Name)=>{
//     console.log(`Name is ${f_Name} ${l_Name}`)
// }

// let str1="Chunck"

// let str2="Norris"
// findName(str1,str2)

// a=10
// b=20
// console.log(a+b)

// let a,b;

// let Name;

// console.log(Name)
// Name="Hello"

// num=10;
// {
//     let num=45;

// }
// console.log(num)
// var num

// str1="John"
// str2="Doe"
// console.log(str1+" "+str2)
// let str1,str2


// {
//     let a=10
//       a=20;
//       console.log(a)
// }
// console.log(a)

// var a=[...[...'...']]
// console.log(a.length)

// let x=10,y=20;

// let result=add(x,y)
// console.log(result)

// var add=function(x,y){
//     return x+y
// }

// X=5;
// console.log("the value of x is "+ X)
// var x;

// var show=(a,b=200)=>{
//     console.log(a+""""+b)

// }

// function mystery(...params){
//     return params
// }
// let a=mystery(1,2,3,4);
// console.log(a)


// const showColors=(line,...colors)=>{
// console.log(line)
//     for(let i in colors )
//     {
//         console.log(colors[i])
//     }
// }
// let partition="-----------------------------"
// showColors(partition,"red")
// showColors(partition,"red","blue")
// showColors(partition,"red","blue","green")
// showColors(partition,"red","blue","green","yellow")
// showColors(partition,"red","blue","green","yellow","balck")


// const showColor=(message,...color)=>{

//     console.log(message)
//     for(let i in color){
//         console.log(color[i])
//     }
// }

// let colorArray=["Saffron","White","Green"]
// let msg="list of colors"

// showColor(msg,...colorArray)

// const createPerson=(firstName,lastName,age)=>{

//     fullName=`${firstName} ${lastName}`;
//     return{
//      fullName,
//         isSenior(){
//             if(age<60){
//                 return "not a senior citizen"
//             }
//             else{
//                 return "a senior citizen"
//             }
//         }
//     }
// }

// let p1=createPerson("Steve","Rogers",150)
// console.log(p1.fullName)
// console.log(p1.isSenior())

// let country=["India","China","Russia","Germany","Italy","Spain","France"]

// let [country1,country2,country3,...europeian ]=country

// console.log("1st :"+country1)
// console.log("2nd :"+country2)
// console.log("3rd :"+country3)
// console.log("europien :"+europeian)

// //console.log("7st :"+country7)

// let Passenger={
//     Name:"Guru",
//     id:{passport:"ow39dd"},
//     from:"Banglore",
//     destination:"Madrid,spain"
// }

// for(let key of Passenger){
//     console.log(key)
// }

// let CapArray=["Delhi","Madrid","Berlin","Paris","London"]

// for(let i of CapArray){
//     console.log(i)
// }





// let Id,Name,salary,Location;
// let C_name,C_branch,C_address;

// class Company{
//     C_name="InfoMind";
//     C_branch="Mysore";
//     C_address="#99 king street,Elephant road,"
// }


// class Labourer extends Company{
//     setDetails(Id,Name,salary,Location){
//       this.Id=Id;
//       this.Name=Name;
//       this.salary=salary;
//       this.Location=Location;
//     }

//     getDetails(){
//         return `ID: ${this.Id}
//                 Name: ${this.Name}
//                 Salary: ${this.salary}
//                 Location: ${this.Location}
//                 WorksIn:${this.C_name} ${this.C_branch} branch
//                 address:${this.C_address}`
//     }
// }

// let l1=new Labourer()
// let l2=new Labourer()
// l1.setDetails("1L913","Rajesh",19000,"Banglore")
// l2.setDetails("1L435","Manoj",19300,"Kanakpura")
// console.log(l1.getDetails())
// console.log(l2.getDetails())
// console.log("----------------------------------")
// console.log(typeof(Labourer))

// let myMap=new Object()
// myMap.id="aama"

// // myMap[28382]="hello"
// // console.log(myMap[28382])
// if(myMap.id){
//     console.log("id exists")
// }


// const myArray=[1,1,2,2,"hello","hello"]
// console.log(myArray)

// let mySet=new Set(["hello"])
// mySet.add([1,1,2,2,3,3])
// console.log(mySet.has("Hello"))

// const weakSet=new WeakSet()
// let p1={id:"1234",Name:"Ranju",favorites:{color:"red",food:"Dose",animal:"Dog"}}
// let p2={id:"1931",Name:"Manju",favorites:{color:"blue",food:"idly",animal:"Cat"}}
// weakSet.add()
// //weakSet.add(p2)
// // // console.log(weakSet.has(p1))
// // // console.log(weakSet.has(p2))
// console.log(weakSet)

// const myMap=new Map()

// myMap.set("Name","Oskar")
// myMap.set("age",30)
// let obj1={}
// let obj2={}
// myMap.set(obj1,100)
// myMap.set(obj2,200)

// console.log(myMap.get("Name"))
// console.log(myMap.get("age"))
// console.log(myMap.get(obj1))
// console.log(myMap.get(obj2))

// console.log(myMap)

// myMap.clear()
// console.log(myMap)

// let myMap=new Map([
//     ["fname","chris"],
//     ["lname","hemsworth"]
// ]);

// for(let key of myMap.values()){
//     console.log(key)
// }

// for(let entry of myMap.entries()){
//     console.log(`${entry[0]}-> ${entry[1]}`);
// }


// for(let [key,value] of myMap.entries()){
//     console.log(`${key}-> ${value}`);
// }

// let myArray=["one","two","three","four"]



// let display=(element,index,array)=>{
//     console.log("arr["+index+"]= "+element)
// }
// myArray.forEach(display)

function mystery(...params){
    return params
}

let a =mystery(1,23,4)
console.log(a)

// var Obj={
//     a:"hello world",
//     b:42,
//     c:true
// };

// var b='a';

// console.log(Obj['c'])
// console.log(Obj(b))
// console.log(Obj['b'])

// function sum(){
//     console.log(x)
//     var x=3
// }

// const a=10
// let c=a+10;
// a=c;
// console.log(a)

// var obj={
//     a:"hello world",
//     b:42,
//     c:true
// };
// var b="a";
// console.log(obj["c"]);
// console.log(obj(b));
// console.log(obj["b"]);

// function show(...args){
//     let sum=0;

//     for(let i of args){
//         sum+=i
//     }
//     console.log("Sum= "+sum)
// }

// show(10,20,30)

