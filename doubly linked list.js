class Node{
  constructor(value){
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty(){
    return this.size ===0
  }

  getSize(){
    return this.size
  }

  append(value){
    const node = new Node(value)

    if(this.size ===0){
      this.head = node 
      this.tail = node

    }else{
      node.prev = this.tail
      this.tail.next = node
      this.tail = node

    }
    this.size++
  }

  prepend(value){
    const node = new Node(value)

    if(this.size ===0){
      this.head = node 
      this.tail = node
    }else {
      node.next = this.head
      this.head.prev = node
      this.head = node  
    }
    this.size++
  }

  remove(value){
    let current = this.head

    if(this.isEmpty()){
      return null
    }
    while(current){
      if(current.value === value){
        if(current.prev){
          current.prev.next = current.next
        }else{
          this.head = current.next
        }

        if(current.next){
          current.next.prev = current.prev
        }else{
          this.tail = current.prev
        }
        this.size--
        return true

      }
      current =   current.next
      
    }
    return false;
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

const list = new DoublyLinkedList()
 list.append(40)
 list.prepend(10)
 list.append(20)
 list.append(10)
 list.remove(40)
 list.print()
