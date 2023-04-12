function init() {
    var name = 'Javascript Closures'; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();

ParentFun=()=>{
    title="The Winds of Winter";
  childFun=()=>{
    console.log(`Book name : ${title}`)
  }
  childFun()
}
ParentFun()

//ddddffffesgfgjrjggggghhfmknhjjhbjg