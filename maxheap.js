class MaxHeap{
  constructor(){
    this.heap = []
  }

  insert(value){
    this.heap.push(value)
    this.shiftUp(this.heap.length-1)
  }

  swap(i,j){
    return [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
  }

  shiftUp(index){
    if(index===0){
      return
    }
    let p = Math.floor((index-1)/2)
    if(this.heap[p]<this.heap[index]){
      this.swap(p,index)
      this.shiftUp(p)
    }
  }
}

const l  = new MaxHeap()

l.insert(5)
l.insert(10)
l.insert(2)
console.log(l)