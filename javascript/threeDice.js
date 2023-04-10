// fs module을 이용해 파일 전체를 읽어와 문자열로 저장
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let input = ['6 6 6'];

let inputArr = input[0].split(' ').map(Number);

let validArr = inputArr.map(function(x) {
    return inputArr.indexOf(x) !== inputArr.lastIndexOf(x);
});
console.log(validArr)
// if (validArr.indexOf(true) === 1) {

// } else if ()
console.log(inputArr[validArr.indexOf(true)]);



