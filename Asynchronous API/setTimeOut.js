// console.log('Message before alert');
// alert('blocking JS');
// console.log('Message after alert');

const buttonElement = document.querySelector('.button');
const textElement = document.querySelector('#text');

buttonElement.addEventListener('click', () =>{
textElement.textContent = 'Button is pressed';

setTimeout(() =>{
    textElement.textContent = '';
}, 2000);
});

