const loadingText = document.querySelector(".loading-text");
const catImgWrapper = document.querySelector(".cat-img-wrapper");
// 가져온 DOM 요소에서도 selector 사용 가능
const catImg = catImgWrapper.querySelector(".cat-img");

async function fetchData() {
  try {
    // get API (REST API의 일종)
    // axios: HTTP 요청 (GET, POST) 등을 보낼 때 쓰는 RESTful API
    // response는 객체로, 페이로드 뿐만 아니라 요청/응답에 관한 상태까지 포함하여 전달함
    const response = await axios.get("https://cataas.com/cat");

    loadingText.style.display = "none"; 
    // IMG 태그의 src; 즉 URL을 직접 넣을 수 있다..
    // response.data란 객체의 body 부분에 해당
    catImg.src = response.data.url;
    catImgWrapper.style.display = "block";
  } catch (error) {
    // 에러 레벨에 따른 로그 출력
    console.error(error);
  }
}

fetchData();
