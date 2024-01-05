// class Queue {
//   constructor(){
//     this.items ={}
//     this.rear = 0;
//     this.front = 0;
//   }

//   enqueue (element) {
//       this.items[this.rear]= element
//       this.rear++
//   }

//   dequeue(){
//     const item  = this.items[this.front]
//     delete this.items[this.front]
//     this.front++
//     return item 
//   }

//   isEmpty(){
//     return this.rear -this.front ===0
//   }

//   size(){
//     return this.rear - this.front
//   }
//   peek(){
//     return this.items[this.front]
//   } 
//    print(){
//     console.log(this.items);
//   }
// }

// const queue = new Queue 
// console.log(queue.isEmpty());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.size());
// queue.print()
// queue.dequeue()
// console.log(queue.peek()); 
// queue.print()


class Queue {
  constructor(){
    this.items ={}
    this.rear = 0
    this.front= 0
  }

  isEmpty(){
    return this.rear - this.front ===0
  }

  size (){
    return this.rear - this.front
  }

  peek(){
    return this.items[this.front]
  }

  enqueue(element){
    this.items[this.rear] =element
    this.rear++
  }

  dequeue(){
     this.item= this.items[this.front ]
     delete this.items[this.front]
     this.front++
     return this.item   
  }

  print(){
    console.log(this.items);
  }
}

const queue = new Queue
console.log(queue.isEmpty())
queue.enqueue(10);
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(queue.peek());
queue.print()
queue.dequeue()
console.log(queue.dequeue());
queue.print()