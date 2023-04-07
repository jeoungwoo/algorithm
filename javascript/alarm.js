// 입력값(시간)보다 45분 앞선 시간의 알람을 맞추는 알고리즘
// [10, 10]

// fs module을 이용해 파일 전체를 읽어와 문자열로 저장
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let hour = Number(input[0].split(' ')[0]);
let min = Number(input[0].split(' ')[1]);

if (min >= 45) {
    console.log(`${hour} ${min - 45}`);
} else {
    if (hour <= 0) {
        console.log(`23 ${60 - (45 - min)}`);
    } else {
        console.log(`${hour - 1} ${60 - (45 - min)}`)
    }
}

// if (min < 45) {
//     hour -= 1;
//     min += 15;
//     if (hour < 0) hour = 23;
// } else min -= 45;

// console.log(hour + " " + minute);