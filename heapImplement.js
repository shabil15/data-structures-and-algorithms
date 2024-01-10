class MinHeap{
  constructor() {
    this.heap = [];
  }

  swap(i,j){
    [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]];
  }

  shiftUp(index){
    while(index>0) {
      const parentIndex = Math.floor((index-1)/2);
      if(this.heap[parentIndex] > this.heap[index]){
        this.swap(parentIndex,index);
        index = parentIndex;
      }else{
        break;
      }
    }
  }

  shiftDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallestIndex = index;
    
    if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]){
      smallestIndex = leftChildIndex;
    }

    if(rightChildIndex < this.heap.length && this.heap[rightChildIndex]< this.heap[smallestIndex]){
      smallestIndex = rightChildIndex;
    }

    if(smallestIndex !=  index){
      this.swap(index,smallestIndex)
      this.shiftDown(smallestIndex)
    }
  }

  buildHeap(arr){
    this.heap = [...arr];
    for(let i=Math.floor(this.heap.length/2) -1 ;i>=0 ;i--){
      this.shiftDown(i)
    }
  }

  insert(value){
    this.heap.push(value)
    this.shiftUp(this.heap.length -1);
  }

  peek(){
    return this.heap[0]
  }

  remove(){
    if(this.heap.length === 0) {
      return null
    }

    const removedValue  = this.heap[0];
    const lastValue  = this.heap.pop();

    if(this.heap.length>0) {
      this.heap[0] = lastValue;
      this.shiftDown(0);
    }
    return removedValue;
  }

  parent(index){
    return Math.floor((index-1)/2);
  }

  leftChild(index){
    return 2 * index + 1
  }

  rightChild(index){
    return 2 * index + 2;
  }

  display(){
    console.log(this.heap);
  }
}


const heap = new MinHeap();
// const arr = [1,34,5,6,76,76]
// heap.buildHeap(arr)
// heap.display()

heap.insert(2)
heap.insert(4)
heap.insert(343)
heap.insert(53)
heap.insert(35)
heap.remove()
heap.display()