// function QuickSort(arr){
//   if(arr.length<2){
//     return arr
//   }
//   let left =[]
//   let right =[]
//   let pivot = arr[arr.length-1]
//   for(let i=0;i<arr.length-1;i++){
//     if(arr[i]<pivot){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
    
//   }
//   return [...QuickSort(left),pivot,...QuickSort(right)]
// }
// const arr = [34,545,456,45,2,5,-23,34,-4]
// console.log(QuickSort(arr));


// function QuickSort(arr){
//   if(arr.length<2){
//     return arr
//   }

//   let left =[]
//   let right =[]
//   let pivot = arr[arr.length-1]
//   for(let i=0;i<arr.length-1;i++){
//     if(arr[i]<pivot){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   return [...QuickSort(left),pivot,...QuickSort(right)]
// }

 const arr = [34,545,456,45,2,5,-23,34,-4]
 console.log(QuickSort(arr));



//  function QuickSort(arr){
//   if(arr.length<2){
//     return arr
//   }

//   let pivot = arr[arr.length-1]
//   let left = []
//   let right = []

//   for(let i=0;i<arr.length-1;i++){
//     if(arr[i]<pivot){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }

//   return [...QuickSort(left),pivot,...QuickSort(right)]
//  }


// function QuickSort(arr){
//   if(arr.length<2){
//     return arr
//   }

//   let pivot = arr[arr.length-1]
//   let left = []
//   let right = []

//   for(let i=0;i<arr.length-1;i++){
//     if(arr[i]<pivot){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   return [...QuickSort(left),pivot,...QuickSort(right)]
// }

function QuickSort(arr){
  if(arr.length<2){
    return arr
  }

  let pivot = arr[arr.length-1]
  let left = []
  let right = []

  for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }else {
      right.push(arr[i])
    }
  }

  return [...QuickSort(left),pivot,...QuickSort(right)]
}