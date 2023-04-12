//A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.

const pureAssoc = (key, value, object) => {
    const newObject = { ...object };
  
    newObject[key] = value;
  
    return newObject;
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const result = pureAssoc('shoeSize', 400, person);
  
  console.log({
    person,
    result
  });


  // Safe Nested Mutation

  const person1 = {
    name: 'Bobo',
    address: { street: 'Main Street', number: 123 }
  };
  
  const deepPersonClone = JSON.parse(JSON.stringify(person1));
  deepPersonClone.address.number = 456;
  
  console.log({ person1, deepPersonClone });