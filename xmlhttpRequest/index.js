const API_URL = "http://jsonplaceholder.typicode.com";

// const xhr = new XMLHttpRequest();
// function handler() {
//     if(this.readyState ==4 && this.status == 200) {
//         const data = JSON.parse(this.responseText);
//         const HTMLResponse = document.querySelector("#app");
//         const listTemplate = data.map(user =>`<li>${user.name} ♥ ${user.email}</li>`);
//         HTMLResponse.innerHTML= `<ul>${listTemplate}</ul>`;
//     }
// }
// xhr.addEventListener("load", handler);
// xhr.open("GET", `${API_URL}/users`);
// xhr.send();

/* USING FETCH */
// const HTMLResponse = document.querySelector("#app");
// fetch(`${API_URL}/users`)
//     .then(response => response.json())
//     .then(users => {
//         const listTemplate = users.map(user =>`<li>${user.name}♥ ${user.email}</li>`);
//         HTMLResponse.innerHTML= `<ul>${listTemplate}</ul>`;
//     });

const HTMLResponse = document.querySelector("#app");
const ul = document.createElement('ul');
fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(users => {
        users.forEach(user =>{
            let elem =  document.createElement('li');
            elem.appendChild(
                document.createTextNode(`${user.name}  ♥  ${user.email}`)
            );
                ul.appendChild(elem);
        });
        HTMLResponse.appendChild(ul);
    });