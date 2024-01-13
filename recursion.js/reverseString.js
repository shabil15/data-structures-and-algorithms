// let str ='nwu'

// function reverseString(str){
//   if(!str.length){
//     return str
//   }
//   return str.charAt(str.length-1)+ reverseString(str.slice(0,-1))
// }




let str = 'shabil'

function reverseString(str){
  if(!str.length){
    return str
  }
  return str.charAt(str.length-1)+reverseString(str.slice(0,-1))
}

console.log(reverseString('shabil'));