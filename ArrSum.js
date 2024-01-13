function SumArray(arr,index=0){
  if(index>=arr.length ){
    return 0
  }
  return arr[index]+SumArray(arr,index+1)
}

const arr= [1,2,3,4,5]
console.log(SumArray(arr));