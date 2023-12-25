class Node{
  constructor(value){
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoubleLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.size =0
  }
  isEmpty(){
    return this.size ===0
  }
  prepend(value){
    let node = new Node(value)

    if(this.isEmpty()){
      this.head = node
      this.tail = node
    
    }else{
      node.next = this.head
      this.head.prev = node
      this.head = node
    }

    this.size++
  }
  append(value){
    let node = new Node(value)

    if(this.isEmpty()){
      this.head = node 
      this.tail = node
    }else{
      node.prev = this.tail
      this.tail.next= node
      this.tail = node
    }
    this.size++
  }

  print(){
    let curr =  this.head 
    let listvalues = ''
    while(curr){
      listvalues += ` ${curr.value}`
      curr = curr.next
    }
    console.log(listvalues);
  }
}

let list = new DoubleLinkedList ()
list.prepend(40)
list.prepend(30)
list.prepend(20)
list.append(50)
list.print()