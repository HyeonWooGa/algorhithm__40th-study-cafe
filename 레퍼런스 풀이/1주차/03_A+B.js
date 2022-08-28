const fs = require("fs"); // fs 모듈 선언
const [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number); // 입력 값 가져오기 + 데이터 정제

console.log(a + b); // 출력
