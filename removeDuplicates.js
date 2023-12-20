class Node{
  constructor(value) {
    this.value = value 
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head =null
    this.size =0
  }

  isEmpty(){
    return this.size===0
  }

  getSize(){
    return this.size
  }

  prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node 
    }else{
    
    node.next = this.head
    this.head= node
    }
    this.size++
  }

  append(value){
    const node= new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      let curr = this.head
      while(curr.next){
        curr = curr.next
      }
      curr.next = node
    }
    this.size++
  }

  removeDups (){
    let curr = this.head
    while(curr && curr.next){
      if(curr.value ===curr.next.value){
        curr.next = curr.next.next
      }else{
        curr = curr.next
      }
    }
  }

  print(){
    let curr = this.head 
    let listvalues = ''

    while(curr){
      listvalues +=` ${curr.value}`
      curr =curr.next
    }
    console.log(listvalues);
  }
}

const list = new LinkedList()
list.append(10)
list.append(10)
list.append(20)
list.append(20)
list.append(30)
list.print()
list.removeDups()
list.print()
