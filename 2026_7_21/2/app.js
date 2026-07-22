// 위 코드의 문제점을 찾고, 적절히 수정하라.
const age = 20;
const hasIdCard = true;

// 비교는 === 로 한다. 
// JS는 타입 관련 높은 자유도가 문제가 되기 때문이다.
if (age >= 18 && hasIdCard === true) {
  console.log("입장 가능합니다");
} else {
  console.log("입장 불가");
}
