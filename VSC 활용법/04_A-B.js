const [a, b] = require("fs") // 구조 분해 할당을 통해 입력을 받아올 수도 있습니다.
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin" // 백준 표준 입력값
      : __filename.split("/").pop().slice(0, -3) + ".txt" // 현재 파일이름을 가져옵니다. (node 04_A-B.txt)
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number); // split으로 만든 배열을 map을 사용해서 한 번에 number 타입으로 변환해 줍니다.

console.log(a - b);

// 터미널에 "node 04_A-B.js"를 입력 후 실행해서 출력값을 확인해 보세요.
