let person={
    firstName:"Wishal",
    lastName:"Rayka",
 
}

let printFullName = function(hometown,state){
    console.log(`${this.firstName} ${this.lastName} from ${hometown}, ${state}`)
   }


let person1={
    firstName:"Abit",
    lastName:"Portil",
}

printFullName.apply(person,["kalburgi","Karnataka"])
printFullName.apply(person1,["Bidar","Karnataka"])

//;;;