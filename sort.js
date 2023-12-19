 function bubbleSort (arr){
  let swap 
  do{
    swap = false
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]>arr[i+1]){
      let temp = arr[i]
      arr[i]=arr[i+1]
      arr[i+1]= temp
      swap = true 
    }
  }
}while(swap)  
 }


// let arr = [1,5,2,8,-4,6]
// bubbleSort(arr)
// console.log(arr);

//Big O = O(n^2)

