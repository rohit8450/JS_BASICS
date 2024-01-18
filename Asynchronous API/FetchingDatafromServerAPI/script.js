const divEle = document.querySelector('.card-container');

function getDetails(id){
    const request = new XMLHttpRequest();

    request.open("GET", `https://dummyjson.com/users/${id}`);
    request.send();
    
    request.addEventListener("load", function(){
        console.log( request.responseText);
    
        // convert string to javaScript object
    
    const data = JSON.parse(this.responseText);
    console.log(data);
    
   displayUser(data);

    });
    
}

function displayUser(data){
    const card = ` <div class="user-card">
    <img src=${data.image} alt="profile image">
    <h3>${data.firstName}</h3>
    <h3>${data.lastName}</h3>
    <p class="email">${data.email}</p>
    <button class="btn">View Profile</button>>
    </div>`;
    
    divEle.insertAdjacentElement('beforeend', card);
}

getDetails(1);
getDetails(2);
getDetails(3);
