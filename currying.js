function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(4)(5)(6));

console.log("----------------------------------------------------------------------")


function sum(a){
  return function(b){
      return function(c){
         // outer functions scope
        return function(d){
            //local scope
            return a+b+c+d
        }
      } 
  }
}         

console.log(sum(10)(20)(30)(40))

//


