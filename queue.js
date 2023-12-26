class Queue {
  constructor() {
      this.items = []
  }

  enqueue(element){
    this.items.push(element)
  }
  dequeue(element){
   return this.items.shift()
  }

  isEmpty(){
    return this.items.length ===0
  }

  peek( ){
    if(!this.isEmpty()){
        return this.items[0]
    }
    return null
  }

  size(){
    return this.items.length
  }

  print(){
    console.log(this.items.toString());
  }
}

const queue = new Queue 
console.log(queue.isEmpty());
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4 )
queue.print()
console.log('size',queue.size( ))
queue.dequeue()
queue.print()
console.log(queue.peek())  