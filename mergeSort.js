function MergeSort(arr){
  if(arr.length<2){
    return arr
  }
  let mid = Math.floor(arr.length/2)
  let leftArr = arr.slice(0,mid)
  let rightArr =arr.slice(mid)
  return Merge(MergeSort(leftArr),MergeSort(rightArr))
}

function Merge(leftArr,rightArr){
  let sorted=[]
  while(leftArr.length && rightArr.length){
    if(leftArr[0]<rightArr[0]){
      sorted.push(leftArr.shift())
    }else{
      sorted.push(rightArr.shift())
    }

  }
  return [...sorted,...leftArr,...rightArr]
}

const arr=[-5,354,34,45,7,9,-2,5]
console.log(MergeSort(arr));