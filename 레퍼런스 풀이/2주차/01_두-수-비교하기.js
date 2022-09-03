// 문제 : 두 수 비교하기

// 입력 : 1) A: int 2) B: int
// 출력 : ">" | "<" | "=="

const fs = require("fs");

// 구조 분해 할당
const [A, B] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// console.log( A, B);

// 조건 판별 Switch문 사용
switch (A > B) {
  case true:
    console.log(">");
    break;
  case false:
    if (A < B) console.log("<");
    else console.log("==");
    break;
}
