// const arr = [20,-5,6,3,79,35]

// function BubbleSort(arr){
//   let swap
//   do {
//     swap =false
//     for(let i=0;i<arr.length-1;i++){
//       if(arr[i]>arr[i+1]){
//         let temp = arr[i]
//         arr[i]=arr[i+1]
//         arr[i+1]=temp
//         swap =true
//       }
//     }

//   } while (swap);

//   return arr
// }

// console.log(BubbleSort(arr)
const arr = [34,45,56,56,76,90,-34,45,-5]

// function BubbleSort(arr){
//   let swap 

//   do{
//     swap= false
//     for(let i=0;i<arr.length-1;i++){
//       if(arr[i]>arr[i+1]){
//         let temp = arr[i]
//         arr[i]=arr[i+1]
//         arr[i+1] = temp
//         swap = true
//       }
//     }
//   }while(swap)

//   return arr
// }

console.log(BubbleSort(arr));


function BubbleSort(arr){
  let swap 
  do {
    swap = false
    for(let i=0;i<arr.length-1;i++){
      if(arr[i]>arr[i+1]){
        let temp = arr[i]
        arr[i]= arr[i+1]
        arr[i+1]= temp
        swap =true
      }
    }
  } while (swap);
  return arr
}