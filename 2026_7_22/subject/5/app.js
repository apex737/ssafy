const box = document.querySelector(".box");
const btn = document.querySelector(".btn");
const inbox = document.querySelector(".inbox");

// value는 항상 문자열이고 CSS가 인식하는 것 또한 문자열이다.
btn.addEventListener("click", () => {
    const px = inbox.value;
    box.style.width = px + "px";
    box.style.height = px + "px";
    inbox.value = "";
});