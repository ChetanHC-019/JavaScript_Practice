// prototypal inheritance
// The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.

let person={
    talk:true,
    canFly(){
        return "Sorry, Cant't fly";
    },
};

let capgemEmployee={
    canCode: true,
    canCook(){
        return "Can't say";
    },
    //Inhering the properties and methods of person
    __proto__:person,
}

//printing  on console
// property of person
console.log("Can a capgemEmployee talk: " +capgemEmployee.talk);

//Method of person
console.log("Can a capgemEmployee fly: " +capgemEmployee.canFly());

//property of capgemEmployee
console.log("Can a capgemEmployee code: " +capgemEmployee.canCode);

//Method of capgemEmployee
console.log("Can a capgemEmployee cook: " +capgemEmployee.canCook());


console.log("-------------------------------------------------------------------------------------")

let snake={
   nonVegetarian: true,
   canTalk(){
     return "Nope"
   }
}

let rattleSnake={
    venomous:true,
    canStrike:true,
}

let python={
    venomous: false,
    canStangle:true
}

rattleSnake.__proto__=snake
python.__proto__=snake

console.log("IS rattle snake non vegetarian :"+rattleSnake.nonVegetarian)
console.log("Can python talk :"+python.canTalk())


console.log("-------------------------------------------------------------------------------------")

 // prototype chaining

 let animal={
    eats:true,
    walk(){
        return "Animal can walk"
    }
 }

 let Bear={
    carnivor:true,
    canAttack(){
        return "Bear can Attack"
    },
    __proto__:animal
 }

 let PolarBear={
    color:"white",
    diet:["Seals","Penguins"],
    __proto__:Bear
 }


 //PolarBear object accessing animal object
 console.log(PolarBear.eats)
console.log(PolarBear.canAttack())

                      // example 3

let user={
    name:"Jack",
    surname:"Sparrow",

    set fullName(value){
        [this.name,this.surname]=value.split(" ")
    },

    get fullName(){
         return `${this.name} ${this.surname}`
    }

};


let admin={
    __proto__:user,
    isAdmin:true
};

console.log(admin.fullName)

// setter triggers
admin.fullName="DB cooper"

console.log(admin.fullName) // state of user modified

console.log(user.fullName) // state of user protected

