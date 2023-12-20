var x= 'welcome to brototype'
// console.log(x);


var y = new String('Bro camp')
// console.log(y);

let a= 'abcdefgh'

// console.log(a.indexOf('c'));

let a2 = 'Hello World'

let arrString= ['Geeks','for','Geeks']

// console.log(a2.replace('World',arrString[0]));



function countVowels(input){
  const vowels = 'aeiouAEIOU'
  let count = 0

  for(let char of input){
    if(vowels.includes(char)){
      count++
    }
      
  }
  return count 
}
const str = 'Programming is fun'
const b = countVowels(str)
console.log(b);
console.log(countVowels('aboobackere'));


function countss(input){
  const vowels = 'aeiouAIEOU'
  let count =0

  for(let char of input){
    if(vowels.includes(char)){
      count++
    }
  }

  return count
}

console.log(countss('dasan mandAn'));


function isPal(string){
  const cleanedString = string.toLowerCase()

  const reversedString = cleanedString.split('').reverse().join('');

  return cleanedString === reversedString
}

console.log(isPal('mcm'));

console.log(a.toUpperCase())


function sum(n){
 if(n<0){
  return null
 }
    return n+sum(n-1)
 
}

console.log(sum(5));


function factorial (n){
  if(n==0){
    return 1
  }
  return n* factorial(n-1)
}

console.log(factorial(5));


function replaceNth  (str,n){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let pos 
  let res =''
  for(let i=0;i<str.length;i++){
    pos =alphabet.indexOf(str[i])
    res += alphabet[(pos+n)% alphabet.length] 
  }
  return res
}

// console.log(replaceNth('shabil',1));


function replaceNts (str,n){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let pos 
  let res = ''
  for(let i=0;i<str.length;i++){
    pos = alphabet.indexOf(str[i])
    res += alphabet[(pos+n)%alphabet.length]
  }
  return res
}

console.log(replaceNts('shabil',1));