let input = document.querySelector(`input`);
let userPhoto = document.querySelector(`.user-photo`);
let name = document.querySelector(`h2`);
let userName = document.querySelector(`.user-name`);
let followers = document.querySelector(`.followers`);
let following = document.querySelector(`.following`);



function generateUser(event){
    if (event.keyCode === 13){
        let xhr = new XMLHttpRequest();
        xhr.open(`GET`, `https://api.github.com/users/${event.target.value}`)
        xhr.onload = function(){
            let userData = JSON.parse(xhr.response);
            console.log(userData);
            userPhoto.src = userData.avatar_url;
            name.innerText = userData.name;
            userName.innerText = userData.login;
            followers.innerText= `Followers - ${userData.followers}`
            following.innerText= `Following - ${userData.following}`
        }
        xhr.send();
        event.target.value = ``;
    }
}

input.addEventListener(`keyup`, generateUser);


// next section

let catPhoto = document.querySelector(`.cat-photo`);
let button = document.querySelector(`button`);

button.addEventListener(`click`, getRandomImages);

function getRandomImages(){
    let xhr2 = new XMLHttpRequest();
    xhr2.open(`GET`,`https://api.thecatapi.com/v1/images/search?limit=1&size=full`)
    xhr2.onload = function(){
        let newPhoto = JSON.parse(xhr2.response);
        console.log(newPhoto);
        catPhoto.src = newPhoto[0].url;
    }
    xhr2.send();
}