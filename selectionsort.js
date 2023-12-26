function  SelectionSort(arr){
  for(let i=0;i<arr.length-1;i++){
    let minIndex = i;
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[minIndex]){
            minIndex= j 
      }
    }

    if(minIndex!=i){
          let temp = arr[i]
          arr[i]= arr[minIndex]
          arr[minIndex]=temp
    }
  }
  return arr
}

const arr= [3,34,54,3,6,89,78,-23,34,4]
console.log(SelectionSort(arr));