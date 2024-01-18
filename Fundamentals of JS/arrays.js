/** Arrays in JS */

// one way of creating an array
const students = ['Rohit', 'Mohit','Kartik'];

console.log(students);

// another wy of creating an array

const cars = new Array('BMW','Audi');
console.log(cars);

// Loop over Arrays

const sttudents = ['Rohit','Kartik','Sam'];

for(let i=0; i < sttudents.length; i++){
    console.log(`Roll No. ${i+1}:${students[i]}`);
    console.log(`Serial No. ${i+1}:${sttudents[i]}`);
};

// for .. in loop

for(let i in sttudents){
    
}