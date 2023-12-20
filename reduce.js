const { reject } = require("promise")

function getSecLarge(arr){
  arr.sort((a,b)=>a-b)
  return arr[1]
}

// console.log(getSecLarge([10,50,30,20,15,40]));


function sumofarr (arr){
const sum =  arr.reduce(function (sum,number){
    const summ = sum + number
    return summ
  },0)
  return sum
}

// console.log(sumofarr([1,2,3,4,6]));


function reverse(string){
  const revers = string.split('').reverse().join('')
  return revers
}

// console.log(reverse('Shabil'));
// console.log(reverse('BASHEER'));


function largest (arr){
  const large = arr.reduce((max,current)=>{
    if(current>max){
      return current
    }else{
      return max
    }
  })
  return large
}

console.log(largest([4,5,6,10,77,35]));


