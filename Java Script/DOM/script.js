// let heading = document.getElementById("heading");
// console.dir(heading);

let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);

let div = document.querySelector("div");
console.log(div);


let btn1 = document.querySelector(".hover");

btn1.onmouseover = () => {
    console.log("Mouse is inside div");
}

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode == "light"){
        currMode = "dark";
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
    } else{
        currMode = "light";
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
    }

    console.log(currMode);
})
