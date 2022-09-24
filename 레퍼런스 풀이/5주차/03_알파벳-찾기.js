const fs = require("fs");

const word = fs.readFileSync("/dev/stdin").toString().trim().split("");
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const result = alphabet.map((char) => word.indexOf(char)).join(" ");

console.log(result);
