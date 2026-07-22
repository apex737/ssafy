/* filter은 리턴이 boolean이다!
return이 ... 
(true) ? 새로운 배열에 추가 : 추가 안함
*/

const users = [
  {
    id: 1,
    name: "데이비드",
    hasJob: true,
  },
  {
    id: 2,
    name: "실비",
    hasJob: true,
  },
  {
    id: 3,
    name: "나나",
    hasJob: false,
  },
];

// filter : 리턴이 true 라면 새로운 배열에 추가
const jobUsers = users.filter((user) => user.hasJob);

// filter는 조건에 맞는 요소들이 들어간 배열을 반환한다.
// 따라서, 멤버접근을 따로 써서 요소를 지정해야한다.
const id1Element = users.filter((user) => user.id === 1)[0];
// hasJob: true인 앞 2개만 출력
// console.log(jobUsers);
console.log(id1Element);


const users2 = [
  {
    id: 3306,
    name: "데이비드",
    hasJob: true,
    age: 40
  },
  {
    id: 7244,
    name: "실비",
    hasJob: true,
    age: 60
  },
  {
    id: 5800,
    name: "나나",
    hasJob: false,
    age: 20
  },
];

let sum = 0;
users2.forEach((user) => sum += user.age);
console.log(sum);
