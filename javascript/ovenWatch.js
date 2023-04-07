// fs module을 이용해 파일 전체를 읽어와 문자열로 저장
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let hour = Number(input[0].split(' ')[0]);
// let min = Number(input[0].split(' ')[1]);

// let timer = Number(input[1]); // 0 <= timer <= 1000

// function end(props) {
//     const { hour, min, timer} = props;
//     if (timer >= 60) {
//         if (timer % 60 === 0) return hour += timer / 60;
//         else if (timer % 60 > 0) return hour += Math.floor(timer / 60), min += timer % 60;
//     }
    
//     if (hour >= 24) return hour === hour - 24;
// }

// end(hour, min, timer)

let [a, b] = input[0].split(' ').map(Number);
let c = Number(input[1]);

let totalMin = a * 60 + b + c; // 분 형태
totalMin %= 1440;
let hour = parseInt(totalMin / 60);
let min = totalMin % 60;

console.log(hour + ' ' + min);