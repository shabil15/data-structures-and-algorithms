class Stack {
  constructor(){
    this.items = []
  }

  isEmpty(){
    return this.items.length === 0
  }

  size(){
    return this.items.length  
  }

  push(element){
    this.items.push(element)

  }

  pop(){
    if(this.isEmpty()){
      return  "Underflow"
    }else{
      return this.items.pop() 
    }
  }

  peek(){
    return this.isEmpty()? "Stack Empty" : this.items[this.items.length-1]
  }

  clear(){
    this.items=[]
  }

  print(){
    console.log(this.items);
  }
}

const stack =new Stack;
console.log(stack.isEmpty());
console.log(stack.size());
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.print()
stack.pop()
console.log(stack.size());
console.log(stack.peek())
stack.print()
stack.clear()
stack.print()


// class Stack {
//   constructor() {
//     this.items =[]
//   }

//   isEmpty(){
//     return this.items.length===0
//   }

//   size(){
//     return this.items.length
//   }

//   push(value){
//     this.items.push(value)
//   }

//   pop(){
//     if(this.isEmpty()){
//       return 'underflow'
//     }

//     return this.items.pop()

//   }

//   peek(){
//     return this.items[this.items.length-1]
//   }

//   display(){
//     console.log(this.items);
//   }
// }

// let stack = new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.display()
// stack.pop()
// stack.display()


// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }

// class Stack {
//   constructor(value){
    
//     this.top=null
//     this.length = 0
//   }

//   isEmpty(){
//     return this.length ===0
//   }

//   push(value){
//    const node = new Node(value)
//    if(this.isEmpty()){
//     this.top = node
//    }else{
//     node.next = this.top
//     this.top = node
    
//    }
//    this.length++
//   }

//   pop(){
//     if(this.isEmpty()){
//       return 'underflow'
//     }else{
//       let removeNode = this.top
//       this.top = this.top.next
//       removeNode.next = null
//       this.length--
//       return removeNode
      
//     }
    
//   }

//   print(){
    
//   }
  
// }

// let stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)

// console.log(stack);