 var userName = 'Rohit';
 var userAge = 25;
 console.log(`userName: ${userName}`);
 console.log(`userAge: ${userAge}`);

 function greetUser(name){
    var greet = 'I am doing fine';
    console.log(`hello ${name}, ${greet}`);
    var currentYear = 2023;
    const year = currentYear - userAge;
    return `Your birth year is ${year}`;
 }

 const birthYear = greetUser(userName);
 console.log(birthYear);