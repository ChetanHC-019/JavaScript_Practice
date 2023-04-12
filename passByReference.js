function PassbyReference(obj) {
	let tmp = obj.a;
	obj.a = obj.b;
	obj.b = tmp;

	console.log(`Inside Pass By Reference
		Function -> a = ${obj.a} b = ${obj.b}`);
}

let obj = {
	a: 10,
	b: 20

}
console.log(`Before calling Pass By Reference
	Function -> a = ${obj.a} b = ${obj.b}`);

PassbyReference(obj)

console.log(`After calling Pass By Reference
	Function -> a = ${obj.a} b = ${obj.b}`);


    console.log("---------------------------------------------------------")
   
    let myFunction=(obj)=>{
      let num;
      num=myObj.b
      myObj.b=myObj.a
      myObj.a=num
      console.log(`inside myFunction()
      myObj --> a=${myObj.a} b=${myObj.b}`)
    }

    let myObj={
        a:10,
        b:20
    }

    console.log(`before calling myFunction() method 
                myObj --> a=${myObj.a} b=${myObj.b}`)

    myFunction(myObj)

    console.log(`after calling myFunction() method 
    myObj --> a=${myObj.a} b=${myObj.b}`)


    //..kjggjggffkhkkkknjn