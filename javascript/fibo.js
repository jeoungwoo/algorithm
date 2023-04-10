// 피보나치 함수를 단순 재귀 코드로 작성
function fibo(x) {
    if (x === 1 || x === 2) {
      return 1;
    }
    // 재귀적으로 호출하며 피보나치 수열의 항을 구함
    return fibo(x - 1) + fibo(x - 2);
}

console.log(fibo(10));