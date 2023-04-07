// fs module을 이용해 파일 전체를 읽어와 문자열로 저장
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

result = Number(input[0]);

function program(result) {
    if (result >= 90 && result <= 100) {
        console.log('A');
    } else if (result < 90 && result >= 80) {
        console.log('B');
    } else if (result < 80 && result >= 70) {
        console.log('C');
    } else if (result < 70 && result >= 60) {
        console.log('D');
    } else {
        console.log('F');
    }
};

program(result);