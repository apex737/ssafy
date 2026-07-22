const ID = document.querySelector(".ID");
const PW = document.querySelector(".passwd");
const btn = document.querySelector(".btn");

// value는 input, select 같은 폼 요소에서 
// 화면에 보이는 값을 나타냄

// textContent는 요소(div, span, p) 내부의 텍스트를
// 동적으로 바꿀 때 사용됨
function handleBtnEvent(evt) {
    if(evt.type==="click" || evt.key==="Enter")
    {
        if(ID.value==="" || PW.value==="") {
            console.log("아이디 또는 비밀번호를 입력하세요");
        }
        else if(ID.value !== "jony123") {
            console.log("잘못된 아이디입니다");
        } 
        else if(PW.value !== "1q2w3e4r") {
            console.log("잘못된 비밀번호입니다");
        }
        else {
            console.log("로그인 성공!");
        }
        ID.value = "";
        PW.value = "";
    }
}

btn.addEventListener("click", handleBtnEvent);
ID.addEventListener("keydown", handleBtnEvent);
PW.addEventListener("keydown", handleBtnEvent);