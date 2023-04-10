function fibonacci (n, pastResults)
{
  var memo = pastResults || [1, 1]; //if no pastResults, set default value
  var i = memo.length;
  if (i > n) { // we have result 
    console.log('looking up value')
    return {  //return 2 values
        pastResults: memo,
        result: memo[n-1]
    };  // return it
  }
  for (; i < n; i++) {
    memo[i] = memo[i-1] + memo[i-2];
  }

  return {
    pastResults: memo,
    result: memo[n-1]
  };
}