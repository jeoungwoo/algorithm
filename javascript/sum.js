// n이 주어졌을때, 1부터 n까지의 합.

let n = Number(input[0]);

let summary = 0;

for (let i = 1; i <= n; i++) {
    summary += i;
}

console.log(summary);