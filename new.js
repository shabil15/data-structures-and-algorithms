class Stack{
  constructor() {
    this.items =[]
  }

  push(element){
    this.items.push(element)
  }

  isEmpty(){
    return this.items.length ===0
  }

  pop(){
    
    this.items.pop()
  }

  min(){
    return Math.min(...this.items)
  }
}

let stack = new Stack 
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.min());