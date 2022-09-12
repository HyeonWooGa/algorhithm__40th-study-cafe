// 문제 : A+B - 8

// 입력 : 1) 테스트 케이스 갯수 2) 각 A, B
// 출력 : `Case #${i}: ${a} + ${b} = ${a+b}`

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}
