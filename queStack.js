

class Queue{
  constructor(){
    this.items = []
    this.front = null
    this.rear = null
  }

  enqueue(element){
    this.items.push(element)
  }

  dequeue(){
    if(this.isEmpty()){
      return 'underflow'
    }
    this.items.shift()
  }

  isEmpty(){
    return this.items.length === 0
  }

  peek(){
    return this.items[0]
  }
  display(){
    console.log(this.items);
  }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.display()