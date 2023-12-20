class Node{
  constructor(value) {
    this.value = value 
    this.next = null
  }
}

class LinkedList {
  constructor(value){
    this.head = null
    this.size=0
  }

  isEmpty(){
    return this.size===0
  }

  getSize(){
    return this.size
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

  append(data){
    let node = new Node(data)
    if(this.isEmpty()){
      this.head = node
    }else{
      let curr = this.head
      while(curr.next){
        curr = curr.next
      }
      curr.next = node
      node.next = null
    }
    this.size++
  }


  insertByIndex(value,index){
    let node = new Node(value)
    let prev = this.head
    if(index===0){
      this.prepend(value)
    }else{
    for(let i=0;i<index-1;i++){
      prev = prev.next
    }
     node.next = prev.next
      prev.next = node
  }
  this.size++

  }

  removeFrom(index){

    if(index<0 || index>this.size){
      return null
    }
    let removenode 
    if(index===0){
      removenode = this.head
      this.head = this.head.next
    }else{
      let prev = this.head 
    for(let i=0;i<index-1;i++){
      prev.next = 
    }

  }
    this.size--
  }

  print(){
    let curr = this.head
    let listvalues = ''

    while(curr){
      listvalues +=` ${curr.value}`
      curr = curr.next
    }
    console.log(listvalues);
  } 


}

let list = new LinkedList()

list.prepend(20)
list.prepend(30)
list.prepend(40)
list.append(50)

list.insertByIndex(60,0)
list.print()
list.removeFrom(3)
list.print()
