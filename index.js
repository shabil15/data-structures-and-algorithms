

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}   

// console.log(fibonacci(2));
// console.log(fibonacci(6));
// console.log(fibonacci(7));


function fibonacci(n){
  const fib= [0,1]
  for(let i=2;i<n;i++){
    fib[i] = fib[i-1]+fib[i-2];
  }
  return fib
}

console.log(fibonacci(10));


function fibo(n){
  if(n<2){
    return 1
  } 
  return 
}



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

// console.log(isPrime(3));
// console.log(isPrime(5));
// console.log(isPrime(6));  

// big o =O(n)

  function isPowerOfTwo (n) {
    if(n<1){
      return false
    }

    while(n>1){
      if(n%2 !=0){
        return false
      }
      n=n/2
    }
    return true
  }
   //Big O = O(log n)
  // console.log(isPowerOfTwo(6));
  // console.log(isPowerOfTwo(8));
  // console.log(isPowerOfTwo(4)); 

  function isPowerOfTwo2 (n){
    if(n<1){
      return false
    }
    return (n & (n-1)) === 0
  } 

  //Big O = O(1)



  // console.log(isPowerOfTwo2(6));
  // console.log(isPowerOfTwo2(8));
  // console.log(isPowerOfTwo2(4)); 



 function recFibonacci(n){
  if(n<2){
    return n
  }

  return recFibonacci(n-1) + recFibonacci (n-2)
 }



//  console.log(recFibonacci(4));
//  console.log(recFibonacci(5));

//Big O = O(n^2)


function recFactorial(n) {
  if(n==0){
    return 1
  }
  return n* recFactorial(n-1)
}


console.log(recFactorial(5));
console.log(recFactorial(0));
//Big O = O(n);



  