function MergeSort(arr){
  if(arr.length<2){
    return arr
  }
  let mid = Math.floor(arr.length/2)
  let leftArr = arr.slice(0,mid)
  let rightArr = arr.slice(mid)
  return Merge(MergeSort(leftArr),MergeSort(rightArr))
}

function Merge(leftArr,rightArr){
  let sortedArr = []
  while(leftArr.length && rightArr.length){
    if(leftArr[0]<rightArr[0]){
      sortedArr.push(leftArr.shift())
    }else{
      sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr,...leftArr,...rightArr]
}
const arr = [-2,45,5,66,457,34,-4]
console.log(MergeSort(arr));