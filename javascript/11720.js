// 숫자의 합

// fs module을 이용해 파일 전체를 읽어와 문자열로 저장
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let string = input[1];

let answer = 0;

for (let x of string) {
    answer += Number(x);
}

console.log(answer);