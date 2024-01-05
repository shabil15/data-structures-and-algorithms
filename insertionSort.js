// function insertionSort(arr){
//   for(let i=1;i<arr.length;i++){
//     let numtoins = arr[i]
//     let j=i-1
//     while(j>=0 && arr[j]>numtoins){
//       arr[j+1]=arr[j]
//       j=j-1
//     }
//     arr[j+1]=numtoins
//   }
//   return arr
// }

const arr=[-2,34,5,7,86,34,545,457,45,4,-2]
console.log(insertionSort(arr));

// function insertionSort (arr){
//   for(let i=1;i<arr.length;i++){
//     let numtoins = arr[i]
//     j=i-1
//     while(j>=0 && arr[j]>numtoins){
//       arr[j+1]=arr[j]
//       j=j-1
//     }
//     arr[j+1]= numtoins
//   }
//   return arr
// }


function insertionSort (arr){
  for(let i=1;i<arr.length;i++){
    let numtoins = arr[i]
    j= i-1
    while(j>=0 && arr[j]>numtoins){
      arr[j+1]=arr[j]
      j=j-1
    }
    arr[j+1]= numtoins
  }
  return arr
}