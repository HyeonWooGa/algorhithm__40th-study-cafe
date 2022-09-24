const fs = require("fs");
let [count, ...words] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

words.forEach((word) => {
  const wordArr = word.split("");
  const letter = [];
  let isGroupWord = true;

  wordArr.forEach((char) => {
    if (!letter.includes(char)) {
      letter.push(char);
    } else if (char !== letter[letter.length - 1]) {
      isGroupWord = false;
    }
  });

  if (!isGroupWord) count--;
});

console.log(Number(count));
