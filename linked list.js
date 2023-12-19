// class Node {
//    constructor(value) {
//     this.value = value
//     this.next = null 
//    }
// }

// class LinkedList {
//   constructor(){
//     this.head = null 
//     this.size =0  
//   }

//   isEmpty() {
//       return this.size === 0;
//   }

//   getSize() {
//     return this.size; 
//   }

//   prepend(value){
//     const node  = new Node(value)
//     if(this.isEmpty()){
//       this.head =node
//     }else{
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }
// }

// const list = new LinkedList();
// console.log("is empty ?",list.isEmpty());
// console.log("size ",list.getSize());
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)

// class Node {
//   constructor(value){
//     this.value = value
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(){
//     this.head = null;
//     this.size = 0
//   }

//   isEmpty(){
//     return this.size===0
//   }

//   getSize(){
//     return this.size 
//   }
//   prepend(value){
//     const node = new Node(value)
//     if(this.isEmpty()){
//       this.head = node
//     }else{
//       node.next = this.head
//       this.head = node
//     } 
//     this.size ++
//   }

//   print(){
//     if(this.isEmpty()){
//       console.log("the list is empty");
//     }else{
//       let curr = this.head
//       let listvalue = ''
//       while(curr){
//         listvalue += `${curr.value}`
//         curr= curr.next
//       }
//       console.log(listvalue);
//     }
//   }
// }

// const list = new LinkedList()
// console.log(list.getSize());
// console.log(list.isEmpty());
// list.print()
// list.prepend(20)
// list.print()
// list.prepend(30)
// list.print();
// list.prepend(40)
// list.print();

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(){
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
    if(this.isEmpty()) {
      this.head = node 
    }else {
      node.next = this.head 
      this.head = node 
    }
    this.size++
  }

  print(){
    if(this.isEmpty()){
      console.log('the List is empty ');
    }else {
      let curr = this.head
      let listvalues = ''
      while(curr){
        listvalues += `${curr.value}`
        curr = curr.next
      }
      console.log(listvalues);
    }
  }
}

const list = new LinkedList();
list.print()
list.prepend(20)
list.print()
list.prepend(30)
list.print()
list.prepend(40)
list.print()