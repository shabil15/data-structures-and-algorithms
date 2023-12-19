

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

// console.log(factorial(5));

function isPrime(n){
  if(n<2){
    return false
  }
  for (let i=2;i< n ;i ++)  {
      if(n%i ==0  ){
        return false
      }
  }
  return true
}

console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(6));  