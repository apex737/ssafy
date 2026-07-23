// async가 있어야 await를 사용할 수 있기 때문
let titles = [];
async function fetchData() {
  try {
    // axios는 Promise 객체 반환
    const response = await axios("https://jsonplaceholder.typicode.com/todos");
    // el은 객체
    response.data.forEach(el => {
      titles.push(el.title);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchData();
console.log(titles)


