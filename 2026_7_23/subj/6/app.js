const btn = document.querySelector(".btn");
const cnt = document.querySelector(".cnt");
const load = document.querySelector(".loading-text");
const mainContent = document.querySelector(".main_content");
const h2 = document.querySelector("h2");

let todos = [];
let filtered = [];
let isDone = false;
async function fetchData() {
  try {
    h2.style.display = "none";
    // 반환 값은 Promise 라는 객체이다.
    const resp = await axios("https://jsonplaceholder.typicode.com/todos_1");
    /* 매우 중요함 !!!!
    filter((el) => !el.complete) 하고
    filter((el) => {!el.complete}) 는 다르다.
    후자는 리턴 값이 없는 것으로 판정; 로컬에서만 실행된다 */
    todos = resp.data;
    console.log(todos);
  } catch (e) {
    console.error(e);
    btn.style.display = "none";
    mainContent.style.display = "none";
    h2.style.display = "block";

  }
}

fetchData();

btn.addEventListener("click", () => {
  isDone = !isDone;
  filtered = isDone ? todos.filter((el) => (!el.completed)) : todos;
  cnt.innerHTML = `count: ${filtered.length}`;
  /** join 메서드란 무엇인가?
   * join 함수로 전달받은 delim으로 string을 생성한다
   * ["a", "b", "c"].join("")   // "abc"
   * ["a", "b", "c"].join(",")  // "a,b,c" */
  mainContent.innerHTML = filtered.map((el) => `<li>${el.title}</li>`).join("");
  btn.innerHTML = isDone ? "전체출력" : "완료되지 않은 할 일 출력";
});
