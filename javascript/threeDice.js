// fs module을 이용해 파일 전체를 읽어와 문자열로 저장
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let input = ['1 2 6']

let inputArr = input[0].split(' ').map(Number);

let validArr = inputArr.map(function(x) {
    return inputArr.indexOf(x) !== inputArr.lastIndexOf(x);
});

let biggestNum = inputArr[validArr.indexOf(true)];

let count = inputArr.reduce((count, el) => count + (inputArr[validArr.indexOf(true)] === el), 0)

if (count === 3) {        // 1. 같은 눈이 3개가 나오는 경우 10000 + 1000 * 같은 눈
    console.log((1000 * biggestNum) + 10000);
} else if (count === 2) { // 2. 같은 눈이 2개가 나오는 경우 1000 + 100 * 같은 눈
    console.log((100 * biggestNum) + 1000);
} else if (count <= 1) {  // 3. 모두 다른 눈이 나오는 경우 가장 큰 눈 * 100
    console.log(inputArr.sort((a, b) => b - a)[0] * 100);
}
