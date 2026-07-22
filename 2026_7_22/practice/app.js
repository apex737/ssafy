/**
 * jony: 40세
    sylvie: 25세
    nana: 4세

 * 
 */
const userInfos = [
  {
    name: "jony",
    age: 40,
  },
  {
    name: "sylvie",
    age: 25,
  },
  {
    name: "nana",
    age: 4,
  },
];


userInfos.forEach((user)=>console.log(`${user.name}: ${user.age}세`));

// 출력결과: ["jony123", "sylvie456", "nana777"]
/*
map 사용 (원본변경x)
콜백함수 선언을 별도로 하지 말 것
콜백함수는 반드시 화살표함수로 사용하며, 축약을 활용할 것.
*/

const userInfos2 = [
  {
    id: "jony123",
    age: 40,
    job: "teacher",
    familyMember: ["아빠", "엄마", "고양이"],
  },
  {
    id: "sylvie456",
    age: 20,
    job: "artist",
    familyMember: ["남편", "아들"],
  },
  {
    id: "nana777",
    age: 4,
    job: "cat",
    familyMember: [],
  },
];

// 실습3. 
let arr = [];
userInfos2.map((user)=>arr.push(user.id));
console.log(arr);

// 실습4.
const under10 = userInfos2.filter((user)=>user.age<=10);
console.log(under10);

// 실습5.
const filtered = userInfos2.filter((el)=>el.id==="sylvie456")[0];
console.log(filtered);

// 실습6. 
if (users.length === 0) {
  console.log("빈 배열입니다.");
} else {
  console.log(users);
}

// 실습7. 
users.map((el)=>console.log(`${el} 안녕`));



