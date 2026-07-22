const calc = {
    a: 1,
    b: 2,
    add: (a,b) => a+b, // 메서드 
}

console.log(calc.add(1,2));

// forEach, map은 배열의 전체 순회 메서드로, 원본을 변경하지 않음 
// break; 같이 중간에 끊는건 불가능함 
// 불변성 (immutability)
const names = ["A", "B", "C"];

// forEach는 함수 1개를 인자로 받는 순회 함수
// 리턴 값이 없다.
names.forEach((name) => console.log(`${name} 안녕!`));

// map은 리턴 값이 있음 
const newNames = names.map((name) => `${name} 안녕!`);
console.log(newNames);
console.log(names); // 원본 변경 X

