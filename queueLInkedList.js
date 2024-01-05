// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// class Queue {
//   constructor() {
//     this.front = null
//     this.rear = null
    
//   }

//   enqueue(data){
//     const node = new Node(value)

//     if(this.isEmpty()){
//       this.front = node
//       this.rear = node
//     }else{
//       this.rear.next = node
//       this.rear = node
//     }
//   }


//   dequeue(){
//     if(this.isEmpty()){
//       return null
//     }
//     const removeData = this.front.data
//     this.front = this.front.next;

//     if(this.isEmpty()){
//       this.rear = null
//     }
//     return removeData
//   }

//   peek(){
//     return this.isEmpty()?null : this.front.data
//   }

//   isEmpty(){
//     return this.front === null
//   }
// }


class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor(){
    this.front = null 
    this.rear = null
    
  }

  isEmpty(){
    return this.front === null
  }

  enqueue(value){
    if(this.isEmpty()){
      let node = new Node(value)
      this.front = node
      this.rear = node
    }else{
      this.rear.next = node
      this.rear = node
    }

  }

  dequeue(){
    if(this.isEmpty()){
      return 'underflow'
    }else{
      let removeNode = this.front.value
      this.front = this.front.next
    }
    return removeNode 
  }

  peek(){
    return this.isEmpty?null: this.front.value
  }
}