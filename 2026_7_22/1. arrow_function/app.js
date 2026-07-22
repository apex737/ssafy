// 1. 함수에 이름이 있다?
function introduce1(name, age)
{
    return `${name} 안녕, 나이는 ${age}세`;
}

// 2. 무명함수를 변수로 가리킴?
// 뭔차인가?
// 람다로 썼다가 변수에 할당하면 이름이 생긴다. 

const introduce2 = function (name, age)
{
    return `${name} 안녕, 나이는 ${age}세`;
}

// 3. 무명함수를 변수로 가리킴2..
// function 키워드가 없다!! 화살표로 대체했다..
// 왜쓸까? 
// 화살표 함수는 선언하지 않고 function 키워드로만 선언한다..?
const introduce3 = (name, age) => {
    return `${name} 안녕, 나이는 ${age}세`;
}

// 4. 화살표 축약: 인라인 함수라면 return 만 명시하는 것도 가능하다.
const introduce4 = (name, age) => `${name} 안녕, 나이는 ${age}세`;

// func 파라미터의 타입은??
// 함수, num, num
function func(callbackFunc, a, b) {
    const ret = callbackFunc(a,b);
    return ret;
}

// (a,b)=> a+b 가 함수임
// 함수 포인터 대체.. 필요할때 예약된 함수를 호출
const ret = func( (a,b)=> a+b, 1, 2);

const s1 = introduce1("jony", 3);
const s2 = introduce2("bony", 3);
const s3 = introduce3("hony", 4);
const s4 = introduce4("pony", 4);
const s5 = introduce4("aony", 4);
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);
console.log(ret);