class Node {
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head = null
    this.size= 0
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
      this.head= node 
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
//O(n)

  insert(value,index){
    if(index<0 || index >this.size){
      return  
    }
    if(index ===0){
      this.prepend(value)
    }else{
        const node = new Node(value)
        let prev= this.head 
        for(let i=0;i<index-1;i++){
          prev = prev.next
        }
        node.next = prev.next
        prev.next = node
        this.size++ 
    }
    
  }


  print(){
    let curr= this.head
    let listvalues = ''
    if(this.isEmpty()){
      console.log("the linked list is empty ");
    }else {
      while(curr){
      listvalues+= ` ${curr.value}`
      curr = curr.next
      }
      console.log(listvalues); 
    }

  }
}
const list = new LinkedList()
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.prepend(50)
list.append(40)
list.insert(50,4)
list.print()