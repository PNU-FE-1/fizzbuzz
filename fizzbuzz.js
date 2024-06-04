function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("CONFLICT!");
    return "FIZZBUZZ";
    console.log("CONFLICT!");
  }
  if (num % 3 === 0) {
    console.log("CONFLICT!");
    return "FIZZ";
    console.log("CONFLICT!");
  }
  console.log("CONFLICT!");
  if (num % 5 === 0) {
    console.log("CONFLICT!");
    return "BUZZ";
    console.log("CONFLICT!");
  }
  console.log("CONFLICT!");
  return num;
  console.log("CONFLICT!");
}
for (let i = 1; i <= 21; i++) {
  console.log(fizzBuzz(i));
}
