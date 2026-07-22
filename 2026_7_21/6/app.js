const ret1 = verifySignup({
  nickname: "jony",
  password: "1q2w3e4r!!",
  age: 40,
});
const ret2 = verifySignup({
  // nickname: "jony",
  password: "1q2w3e4r!!",
  age: 40,
});
const ret3 = verifySignup({
  nickname: "jony",
  password: "111",
  age: 40,
});
const ret4 = verifySignup({
  nickname: "jony",
  password: "111",
  age: 13,
});

// true, false, false, false
console.log(ret1, ret2, ret3, ret4);

function verifySignup(obj)
{
    const cond1 = (obj.nickname === undefined 
        || obj.nickname === undefined || obj.nickname === undefined);
    const cond2 = obj.password.length < 10;
    const cond3 = obj.age < 15;
    if(cond1 || cond2 || cond3) return false;
    return true;
}