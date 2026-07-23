// async가 있어야 await를 사용할 수 있기 때문
async function fetchData() {
  try {
    // axios는 Promise 객체 반환
    const response = await axios("https://jsonplaceholder.typicode.com/todos");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
