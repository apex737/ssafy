// async가 있어야 await를 사용할 수 있기 때문
let notCompletedTodos = [];
async function fetchData() {
  try {
    // axios는 Promise 객체 반환
    const response = await axios("https://jsonplaceholder.typicode.com/todos");
    // el은 객체
    notCompletedTodos = (response.data.filter((el) => !el.completed));
    // 방법 1. await 이후에 바로 출력한다..
    // console.log(notCompletedTodos);
  } catch (error) {
    console.log("error");
    console.error(error);
  }
}

// 방법 2. fetchData의 반환이 완료될 때까지 기다린다.
fetchData().then(() => {
  console.log(notCompletedTodos);
});


