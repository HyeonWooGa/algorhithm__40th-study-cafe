const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin" // 백준 표준 입력값
      : __filename.split("/").pop().slice(0, -3) + ".txt" // 현재 파일이름을 가져옵니다. (node 03_A+B.txt)
  )
  .toString()
  .trim()
  .split(" ");

// 입력값을 number 타입으로 변환해 줍니다.
const a = +input[0];
const b = +input[1];

console.log(a + b);

// 터미널에 "node 03_A+B.js"를 입력 후 실행해서 출력값을 확인해 보세요.
