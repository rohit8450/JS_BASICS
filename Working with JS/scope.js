
/** Scope in JS */

// Global
// Functional (Local)
// Block
{
    var varNum = 10;
    let letNum = 30;
    const constNum = 40;
}
    

function print(){
    var varLocal = 10;
let letLocal = 30;
const constLocal = 40;

console.log(varLocal, letLocal, constLocal);
console.log(varNum, letNum, constNum);
}

console.log(varNum, letNum, constNum);

print();
console.log(varLocal, letLocal, constLocal);