const jokecontainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,explicit&type=single";

let getjoke = () =>{
    jokecontainer.classList.remove("fead");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokecontainer.textContent=`${item.joke}`;
        jokecontainer.classList.add("fead");
    } );
}
btn.addEventListener("click",getjoke);
getjoke();