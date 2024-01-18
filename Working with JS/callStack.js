var userName = 'Rohit';
var userAge = 25;
console.log(`userName: ${userName}`);
console.log(`userAge: ${userAge}`);

greetUser(userName);

function greetUser(name){
   var greet = 'I am doing fine';
   console.log(`hello ${name}, ${greet}`);
   var currentYear = 2023;
console.log(birthYear);
   const year = birthYear(currentYear , userAge);
   console.log(`**************`);
   return `Your birth year is ${year}`;
}

function birthYear(year, age){
    console.log(`Calculating the birth year`);
    return year - age;
}

var bYear = greetUser(userName);
console.log(bYear);
console.log(birthYear);