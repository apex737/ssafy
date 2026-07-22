const quiz = document.querySelector(".quiz");
const ans = document.querySelector(".ans");


quiz.addEventListener("keydown", (evt) => {
    if(evt.key == "Enter")
    {
        if(quiz.value === "seoul" || quiz.value === "Seoul") {
            ans.textContent = "정답입니다!"
            ans.style.color = "blue";
        } else {
            ans.textContent = "";
        }
    }
});