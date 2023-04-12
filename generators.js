

// function* infinite(){
//     let val=0;

//     while(true){
//        yield val++;
//        
//     }
// }

// const generator=infinite()

// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);



// var arr=['a','b','c']

// function* numberSeries(){
//     yield 1;
//     yield* arr
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
   
// }

// const generator=numberSeries();

// for(let i of generator){
//     console.log(i)
// }

                                // calling one generator from another 

// function* firstGenerator(){
//     yield 2;
//     yield 3;
// }

// function* secondGenerator(){
//     yield 1;
//     yield* firstGenerator();
//     yield 4;
// }

// // const gen=secondGenerator()

// for(let num of secondGenerator()){
//     console.log(num)
// }

                                  //Using async generators (for api call)


let firstPromise=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(1),5000)
    })
}

let secondPromise=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(2),3000)
    })
}


async function* generator(){
    const firstPromiseResult= await firstPromise()
    yield firstPromiseResult
    const secondPromiseResult= await secondPromise()
    yield secondPromiseResult
}

var gen=generator();

for await(let value of gen){
    console.log(value)
}


// const firstPromise = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(1), 5000)
//     })
//   }
    
//   const secondPromise = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(2), 3000)
//     })
//   }
    
//   async function* generator() {
//     const firstPromiseResult = await firstPromise();
//     yield firstPromiseResult;
//     const secondPromiseResult = await secondPromise();
//     yield secondPromiseResult;
//   }
    
//   var it = generator();
//   for(let value of it){
//     console.log(value);
//   }
  

