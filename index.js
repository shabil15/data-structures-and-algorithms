

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// console.log(fibonacci(2));
// console.log(fibonacci(5));
// console.log(fibonacci(7));



function factorial (n) {
  let result = 1

  for(let i=2 ;i<= n ;i++ ){
    result = result*i
  }
  return result
}

console.log(factorial(5));