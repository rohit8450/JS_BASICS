const btn = document.createElement("button");
btn.textContent = "Print";
btn.className = "btn1";

const division = document.querySelector("div");
division.appendChild(btn);

// removing heading on the click of a button
btn.addEventListener('click', () =>
document.querySelector('h1').remove()
);



const button = document.createElement("button");
button.textContent = "Click here..";
button.className = "btn2";

const divi = document.querySelector("div");
divi.appendChild(button);

const p = document.querySelector('p');
p.addEventListener('mousehover', clickPara);

function clickPara (){
    p.style.backgroundColor = 'yellow';
    console.log("Para Clicked");
};


