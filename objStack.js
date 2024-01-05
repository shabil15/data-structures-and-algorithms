class Stack {
  constructor() {
    this.items={}
    this.size =0
  }

  push(element){
    this.items[this.size]=element
    this.size++;
  }

  pop(){
    if(this.isEmpty()){
      return "Undeflow"
    }

    this.size--
    const poppedElement = this.items[this.size];
    delete this.items[this.size]
    return poppedElement;
  }


  isEmpty(){
    return this.size ===0
  }

  size(){
    return this.size;
  }

  peek(){
    return this.isEmpty()?'Underflow': this.items[this.size-1]
  }

  print(){
    console.log(this.items);
  }
}

const stack = new Stack

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.print()
stack.pop()
stack.print(  )
