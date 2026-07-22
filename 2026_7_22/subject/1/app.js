const id = document.querySelector(".id");
const passwd = document.querySelector(".passwd");
const btn = document.querySelector(".btn");

// value는 화면에 보이는 값
btn.addEventListener("click", ()=> {
    console.log(id.value);
    console.log(passwd.value);
    id.value = "";
    passwd.value = "";
});