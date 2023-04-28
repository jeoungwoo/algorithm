let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

// for (let i = 1; i <= n; i++) {
//     console.log('*'.repeat(i));
// }

let result = "";

for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);