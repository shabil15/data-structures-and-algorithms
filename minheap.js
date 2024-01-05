class Minheap{
  constructor(){
    this.heap = []
  }

  insert(value){
    this.heap.push(value)
    this.shiftUp(this.heap.length-1)
  }
  
  swap(i,j){
    [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
  }

  shiftUp(index){
    if(index==0){
      return 
    }
    let p = Math.floor((index-1)/2)
    if(this.heap[p]>this.heap[index])
    {
      this.swap(p,index)
      this.shiftUp(p)
    }
  }
}

const l = new Minheap()

l.insert(5)
l.insert(1)
l.insert(9)
console.log(l)

