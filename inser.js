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

  removeFrom(index){
    if(index<0|| index>this.size){
      return null
    }

    let removeNode 
    if(index===0){
      removeNode = this.head
      this.head = this.head.next
    }else{
      let prev = this.head
      for(let i=0;i<index-1;i++){
        prev=prev.next
      }
      removeNode = prev.next
      prev.next = removeNode.next
    }
    this.size--
    return removeNode.value
  }

  removeBy (value){
    if(this.isEmpty()){
      return null
    }
      if(this.head.value=== value){
        this.head = this.head.next
        this.size--
        return value
      }else{
        
        let prev = this.head

        while(prev.next && prev.next.value!==value){
          prev = prev.next
        }
        if(prev.next){
          
         const removeNode = prev.next
          prev.next  = removeNode.next
          this.size --
          return value
        }
        return null

    }
  }

  search (value){
    if(this.isEmpty()){
      return -1
    }else{
      let curr = this.head 
      let count =0
      while(curr){

        if(curr.value===value){
          return count 
        }
        curr = curr.next
        count ++ 
      }
    }

  }

  reverse(){
    let prev = null
    let curr = this.head 
      while(curr){
        let next = curr.next
        curr.next = prev
        prev =curr
        curr = next 
      }
      this.head = prev;
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

list.insert(10,0)
list.insert(20,1)
list.insert(30,2)
list.insert(40,3)
// list.removeFrom(2)
// list.removeFrom(2)


list.reverse()
list.print()