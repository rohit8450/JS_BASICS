// word vs keyword

// chacha = word
// for, else, var = keyword

// var const let

// var
/// functional scope
function () {
    if(true){
        var a =12;
    }
    console.log(a);
}

// let
/// block scope
function () {
    if(true){
        let b = 13;
        console.log(b);
    }
}

// const
/// block scope
function () {
    if(true){
        const c = 13;
        console.log(c);
    }
}


// hoisting - variables and functions are hoisted which means there decleration is moved
// at the top of the code
console.log(a);
var a = 12;

// types in JS
//1. primitive and reference

// primitives = number, string, boolean,
// reference = [] () {} 