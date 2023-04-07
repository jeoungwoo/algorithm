// fs module을 이용해 파일 전체를 읽어와 문자열로 저장
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);
let b = input[1];

console.log(a * Number(b[2]));
console.log(a * Number(b[1]));
console.log(a * Number(b[0]));
console.log(a * Number(b));