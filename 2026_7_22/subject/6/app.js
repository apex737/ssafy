const box = document.querySelector(".box");
const h1 = document.querySelector("h1");
const btn = document.querySelector(".btn");

let flag = false;
btn.addEventListener("click", ()=> {
    if(!flag)
    {
        btn.textContent = "화이트 모드";
        box.style.backgroundColor = "black";
        box.style.color = "white";
    }
    else
    {
        btn.textContent = "다크 모드";
        box.style.backgroundColor = "white";
        box.style.color = "black";
    }
    flag = !flag;
});