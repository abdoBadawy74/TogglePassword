let body = document.body;

body.style.cssText =
  "display : flex; justify-content:center; gap:20px; margin-top:250px;  background-color: blueviolet;";

let myInput = document.getElementById("myInput");

let btn = document.getElementById("btn");


btn.addEventListener("click", showAndHide)

function showAndHide () {
  if (btn.innerHTML.trim() === "Show") {
    this.innerHTML = "Hide";
    myInput.type = "text";
  } else {
    this.innerHTML = "Show";
    myInput.setAttribute("type","password")
  }
};

myInput.style.cssText =
  "background-color: #FFE9FF; padding:5px 10px; border-radius:5px; outline:none; border:1px solid #eee";
btn.style.cssText =
  "background-color: #FFE9FF; padding:5px 10px; border-radius:5px; outline:none; border:1px solid #eee; font-weight:600";
