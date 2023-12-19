class Node {
  constructor(value){
    this.value= value
    this.next= null 
  }
}

class LinkedList {
  constructor(value) {
    this.head = null
    this.size = 0
  }

  isEmpty(){
    return this.size ===0
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
      this.head = node
    }
    this.size++
  }

  append(value){
    const node = new Node(value)

    if(this.isEmpty()){
      this.head = node
    }else{
      let prev = this.head
      while(prev.next){
        prev = prev.next 
      }
      prev.next = node 
    }
    this.size++
  }

  insert(value,index){
     let node = new Node(value)
    if(index<0 || index >this.size){
      return
    }

    if(index ===0){
      this.prepend(value)
    }else{
      let prev = this.head
      for(let i=0;i<index-1;i++){
        prev = prev.next
      }
      node.next = prev.next 
      prev.next = node
      this.size ++
    }

  }

  remove(index){
    if(index<0|| index>this.size){
      return
    }
    
  }

  print(){
    
    if(this.isEmpty()){
      console.log("the list is empty ");
    }else{
      let curr= this.head 
      let listvalues = ' ' ;
      while(curr){
        listvalues += ` ${curr.value}`
        curr= curr.next 
      } 
      console.log(listvalues);
    }
  }
}


let list = new LinkedList()
list.prepend(5)
list.append(10)
list.append(20)
list.append(30)
list.insert(60,2)
list.insert(1,0)
list.print()