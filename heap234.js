class MinHeap{
  constructor(){
    this.heap = [];
  }

  swap(i,j){
    [this.heap[i],this.heap[j]]= [this.heap[j],this.heap[i]];
  }

  shiftUp(index){
    while(index > 0){
      const parentIndex = Math.floor((index -1)/2);
      if(this.heap[parentIndex] > this.heap[index]){
        this.swap(parentIndex,index)
        index = parentIndex
      }else {
        break;
      }
    }
  }

  shiftDown(index){
    const leftChildIndex = 2 * index +1
    const rightChildIndex = 2* index +2;
    let smallestIndex = index

    if(leftChildIndex <this.heap.length &&this.heap[leftChildIndex] <this.heap[smallestIndex]){
      smallestIndex = leftChildIndex;
    }

    if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]){
      smallestIndex = rightChildIndex
    }

    if(smallestIndex!= index){
      this.swap (index,smallestIndex)
      this.shiftDown(smallestIndex)
    }
  }

  buildHeap(arr){
    this.heap = [...ar];
    for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
      this.shiftDown(i)
    }
  }


  insert(value){
    this.heap.push(value)
    this.shiftUp(this.heap.length-1)
  }

  peek(){
    return this.heap[0]
  }
  
  display(){
    console.log(this.heap);
  }
}

const heap = new MinHeap();
heap.insert(2)
heap.insert(4)
heap.insert(443)
heap.insert(49)


heap.insert(343)
heap.insert(53)
heap.insert(7)

heap.insert(35)
// heap.remove()
heap.display()
