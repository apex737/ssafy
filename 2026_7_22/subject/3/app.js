const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const h1 = document.querySelector("h1");

red.addEventListener("click", () => h1.style.color = 'red');
blue.addEventListener("click", () => h1.style.color = 'blue');