const passwords = [
    "123456",
    "password",
    "admin",
    "freecodecamp",
    "mypassword123",
  
 ];

 // using the passwords constant from above
 //

const longPasswords = passwords.filter(password => password.length >= 9);

console.log(longPasswords); // logs ["freecodecamp", "mypassword123"];