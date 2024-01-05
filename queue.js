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
    console.log(this.items);
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


// class Queue{
//   constructor() {
//     this.items =[]

//   }

//   isEmpty(){
//     return this.items.length ===0
//   }

//   size(){
//     return this.items.length
//   }

//   enqueue(element){
//     this.items.push(element)
//   }

//   dequeue(){
//     this.items.shift()
//   }

//   peek(){
//     return this.items[0]
//   }

//   print(){
//     console.log(this.items);
//   }
// }

// const queue = new Queue 

// console.log(queue.isEmpty())
// console.log(queue.size());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.print()
// console.log(queue.peek())
// queue.dequeue()
// queue.print()
////////////////////////////////////////////////////////////////////////////////////////

// class Queue{
//   constructor() {
//     this.items =[]

//   }

//   isEmpty(){
//     return this.items.length ===0
//   }

//   size(){
//     return this.items.length
//   }

//   enqueue(element){
//     this.items.push(element)
//   }

//   dequeue(){
//     this.items.shift()  
//   }

//   peek(){
//     return this.items[0]
//   }

//   print(){
//     console.log(this.items);
//   }
// }

// let queue =new Queue
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()
// queue.dequeue()
// queue.print()


///////////////////////////////////////////////////////////////////////////////////////

// class Node {
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// class Queue{
//    constructor(){
//     this.front = null
//     this.rear = null
//    }

//    isEmpty(){
//     return this.front ===null
//    }

//    enqueue(value){
//     if(this.isEmpty()){
//       let node = new Node(value)

//       this.front = node
//       this.rear = node

//     }else{
//       this.rear.next = node
//       this.rear = node
//     }
//    }

//    dequeue(){
//     if(this.isEmpty()){
//       return 'underflow'
//     }else{
//       let removeNode = this.front.value
//       this.front = this.front.next
//     }
//     return removeNode

//    }

//    peek(){
//     return this.isEmpty()?null : this.front.value
//    }
// }