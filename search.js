const arr =[ -5,2,10,4,6]

var t = 10

function arrsearch (arr,target) {
  for(let i=0;i<arr.length;i++){
    if(arr[i]===t){
      return i
    }
  }
  return -1 
}

// console.log(arrsearch(arr,t));
//Big O = O(n)

function binarySearch (arr,target) {
  let li = 0
  let ri=  arr.length-1

  while(li<=ri){
    let mi= Math.floor((li+ri)/2)
    if(target===arr[mi]){
      return mi
    }
    if(target< arr[mi]){
      ri = mi-1
    }else{
      li = mi+1
    }

  } 
}

// console.log(binarySearch([1,4,6,7,10],6));
// console.log(binarySearch([1,4,5,6,7,3,77,10],77));




function recBinarySearch (arr,target){
    return search(arr,target,0,arr.length-1)
}

function search (arr,target,li,ri){
  if(li>ri){
    return -1
  }
  let mi= Math.floor((li+ri)/2)

  if(target===arr[mi]){
    return mi
  }

  if(target<mi){
    return search(arr,target,li,mi-1  )
  }else{
    return search (arr,target,ri,mi+1)
  }
}

//  console.log(recBinarySearch([1,4,6,7,10],6));


//Big O = O(log n)

