// 문제: 별찍기 - 1

// 입력: 1) 100이하의 자연수
// 출력: 별

const fs = require("fs");

const num = Number(fs.readFileSync("/dev/stdin"));

for (let i = 1; i <= num; i++) {
  let stars = "";
  for (let j = 0; j < i; j++) {
    stars += "*";
  }
  console.log(stars);
}
