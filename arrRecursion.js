// function reverseString(str) {
  
//   if (str.length <= 1) {
//     return str;
//   } else {
    
//     return str.charAt(str.length-1) + reverseString(str.slice(0,-1));
//   }
// }

// // Example usage
// const originalString = "Hello, World!";
// const reversedString = reverseString(originalString);

// console.log("Original String:", originalString);
// console.log("Reversed String:", reversedString);


  // let arr=[1,2,3,4,5,6]

  // function ReverseArray(arr){
  //   if(arr.length<=1){
  //     return arr
  //   }
  //   let last = arr.pop()
  //   return [last].concat(ReverseArray(arr))
   
  // }

  // console.log(ReverseArray(arr));


  // let arr = [1,2,3,4,5,6]

  // function ReverseArray(arr){
  //   if(!arr.length){
  //     return arr 
  //   }
  //   let last = arr.pop()
  //   return [last].concat(ReverseArray(arr))
  // }



  let arr=[1,2,3,4,5]

  function ReverseArray(arr){
    if(!arr.length){
      return arr
    }

    let last = arr.pop()
    return [last].concat(ReverseArray(arr))
  }
  console.log(ReverseArray(arr));


  let str= 'shabil'

  function ReverseString(str){
    if(!str.length){
      return arr
    }
    return str[str.length-1]+ReverseString(str.slice(0,-1))
  }

  console.log(ReverseString(str));