class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size =0
  }

  isEmpty(){
    return this.size ===0
  }

  prepend(value){
    let node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      node.next = this.head 
      this.head = node
    }
    this.size++
  }

  append(value){
    let node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      let curr= this.head
      while(curr.next){
        curr= curr.next
      }
      curr.next = node
    }
    this.size++
  }

  

  print(){
    let listvalues =''
    if(this.isEmpty()){
      console.log("this list is empty");
    }else{
      let curr= this.head
      while(curr){
        listvalues+=` ${curr.value}`
        curr = curr.next
      }
      console.log(listvalues);
    }
  }
  
}

let list = new LinkedList()

list.prepend(30)
list.prepend(20)
list.prepend(10)
list.append(40)
list.print()