// JSON은 자바스크립트 객체와 배열 형식으로 구성됨
// 일반 JS와 다르게, key를 따옴표로 감싸야하고, 마지막에 콤마를 넣으면 안됨
const JSON_SERVER_URL = "https://jsonplaceholder.typicode.com/todos";
const h1 = document.querySelector("h1");
const loadingText = document.querySelector(".loading-text");
const todoUl = document.querySelector(".todo-ul");

// fetchData에서 받아온 배열을 여기 저장해두면
// 버튼 클릭 핸들러에서도 재사용(필터링)할 수 있음
let todos = [];

// 넘겨받은 배열을 그대로 li로 그려주는 헬퍼
function renderTodos(list) {
  const lis = list.map((el) => `<li>${el.title}</li>`).join("");
  todoUl.innerHTML = lis;
}

// 연결되는걸 기다리지 않고 논블러킹 실행..
// 웹페이지에서 모든 이미지가 전부 들어올 때 까지 기다리지 않고
// 유저에게 중요한 것들만 위주로 먼저 보여준다..

// async: 내가 비동기 현상을 제어하고 싶은 곳이 있다고 알려줌
// 함수 안에서 await를 쓸 수 있게 허용
// 함수가 항상 Promise를 리턴하게 만듦
async function fetchData() {
  try {
    // await: 비동기를 동기로 바꾸고자 하는 부분
    // respons가 성공하면 속행, 아니면 catch로 점프
    const response = await axios(JSON_SERVER_URL);
    console.log(response.data);
    todos = response.data; // 나중에 필터링할 수 있도록 저장
    loadingText.style.display = "none";

    renderTodos(todos);
  } catch (e) {
    console.log("Fetch Fail");
    console.error(e);
  }
}

fetchData();

const btn = document.querySelector(".toggle");
let isDone = false;
btn.addEventListener("click", () => {
  if (isDone) {
    btn.textContent = "전체 출력";
    renderTodos(todos.filter((el) => !el.completed));
  } else {
    btn.textContent = "완료되지 않은 할 일만 출력";
    renderTodos(todos);
  }

  isDone = !isDone;
});
