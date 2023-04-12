let person={
    firstName:"Wishal",
    lastName:"Rayka",
 
}

let printFullName = function(hometown){
    console.log(`${this.firstName} ${this.lastName} from ${hometown}`)
   }


let person1={
    firstName:"Abit",
    lastName:"Portil",
}

// function burrowing
printFullName.call(person,"Kalbugi");
printFullName.call(person1,"Bidar");

