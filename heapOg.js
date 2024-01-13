class Heap{
  constructor(){
    this.arr= []
  }

  left(i){
    return (2*i)+1
  }

  right(i){
    return (2*i)+2
  }

  parent(i){
    return Math.floor((i-1)/2)
  }

  getMin(){
    return this.arr[0]
  }

  insert(val){
    this.arr.push(val)
    this.shiftUp(this.arr.length)
  }

  shiftUp(i){
    let arr = this.arr
    while (i>0){
      const p = this.parent(i)
      if(arr[p]>arr[i]){
        [arr[p],arr[i]]= [arr[i],arr[p]]
        i=p
      }else{
        break;
      }
    }
  }

  delete(){
    const removed= this.arr[0]
    const lastVal = this.arr.pop()

    if(this.arr.length){
      this.arr[0] = lastVal
      this.shiftDown(0)
    }
    return removed
  }

  shiftDown(i){
    const l= this.left(i)
    const r = this.right(i)
    let smallest = i
    if(this.arr[l]<this.arr[smallest] && l<this.arr.length){
      smallest =l
    }
    if(this.arr[r]< this.arr[smallest] && r<this.arr.length){
      smallest = r
    }
    if(smallest!==i){
      [this.arr[smallest],this.arr[i]]=[[this.arr[i]],this.arr[smallest]]
      this.shiftDown(smallest) 
    }
  }

  display(){
    console.log(this.arr);
  }

  buildHeap(arr){
    this.heap = arr
    for(let i= Math.floor((arr.length)/2)-1;i>=0;i--){
      this.shiftDown(i)
    }
  }
}
const heap= new Heap()
heap.insert(10)
heap.insert(20)
heap.insert(1)
heap.insert(15)
heap.display()