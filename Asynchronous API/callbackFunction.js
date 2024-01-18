// function greet(callback){
//     setTimeout(() => {
//         console.log('Hello');
//         callback();
//     }, 1000);
    
// }

// function message(){
//     console.log('welcome to the session');
// }
// greet(message);


//1
function greet(callback) {
    setTimeout(() => {
        console.log('Hello');
        callback();
    },1000);
}

function message(){
    console.log('welcome to the js');
}

greet(message);


//2

function letter(consolecall){
    setTimeout(() => {
        console.log('pigeon post message');
        consolecall();
    },1000);
}

function message(){
    console.log('message received');
}

letter(message); 