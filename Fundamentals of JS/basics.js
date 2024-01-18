console.log("Welcome to JavaScript!");

// let age =10;

// let, var ,const

// let age;
// age=15;

// const pi=3.14
// console.log(pi);

// var myName = 'Rohit';
// myName = 'Thakur';
// console.log(myName);


/*DATA TYPES*/
// Object
//Primitive DataType

/** Primitive DataType */

//Number (64 bits)

let num = 10;
console.log(typeof num);

//String
var firstName = "Rohit";
var lastName ='Thakur';
var nickName =`Kumar`;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof nickName);

// Boolean
let bool = false;
console.log(typeof bool);

//Undefined.

let a;
console.log(typeof a);

// Interesting about JS

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

const numb = Infinity/Infinity;
console.log(numb);

// Type coercion

let numbe = ('5' + 5);
console.log( typeof numbe);

let fullName = ("Rohit" + " " + "Thakur");
console.log(fullName);

// if condition

let number = 30;
if (number < 10){
    console.log('Nmber is less than 10');
    console.log('Number is equal to 30');
}else{
    console.log('Number is greater')
}
