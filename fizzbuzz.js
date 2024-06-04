
// 3의 배수인 경우 FIZZ , 5의 배수일땐 BUZZ , 3과 5의 공배수일땐 FIZZBUZZ를 출력하는 함수
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FIZZBUZZ";
  }
  if (num % 3 === 0) {
    return "FIZZ";
  }
  if (num % 5 === 0) {
    return "BUZZ";
  }
  return num;
}

for (let i = 1; i <= 20; i++) {
  console.log(fizzBuzz(i));
}
