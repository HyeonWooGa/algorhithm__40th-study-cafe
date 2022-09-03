// 문제 : 시험 성적

// 입력 : 1) grade: int, 0 <= grade <= 100
// 출력 : "A" | "B" | "C" | "D" | "F"

const fs = require("fs");

// 10으로 나눈후 내림 처리해줍니다.
const grade = Math.floor(Number(fs.readFileSync("/dev/stdin")) / 10);

// 조건 판별 스위치문 활용.
switch (grade) {
  case 10:
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("C");
    break;
  case 6:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}
