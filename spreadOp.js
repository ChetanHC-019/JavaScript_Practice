// add=(x,y,z)=>{
//   return x+y+z
// }

// num=[10,10,10]

// const result=add(...num)

// console.log(result)
// console.log(add.apply(null,num))

           //---------------------------------------------------------------

// const array=[1,2,3,4]

// const myObj={...array}

// console.log(myObj)

        //------------------------------------------------------------------

// myFun=(x,a,b,z)=>{
//   console.log(`${x} ${a} ${b} ${z}`)
// }


// secondArry=[150,200]
// myArr=[100,...secondArry,300]



// //myFun.apply(null,myArr) ----> by using apply method

// myFun(...myArr)

       //-----------------------------------------------------------------

// const dateFields=[2023,0,09];

// const date=new Date(...dateFields)
// console.log(date)

            //------------------------------------------

// let array=[1,2,3]

// let array2=[4,5,6]

//  array=array.concat(array2)

// console.log(array)



                    // concatination without using spread syntax

// array1=[1,2,3]

// array2=[...array1]

// array2.unshift()

// console.log(array2)


                   // concatination using spread syntax

// arr1=[1,2,3]
// arr2=[4,5,6]

// arr1=[...arr1,...arr2]

// console.log(arr1)


                     //spread operator in object literal

const obj1={foo:'bar',x:42};

const obj2={foo:'baz',y:13};

const clonedObj={...obj1}
const mergedObj={...obj1,...obj2}

console.log(clonedObj)
console.log(mergedObj)

