// class Node {
//   constructor(data) {
//       this.data = data;
//       this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//       this.head = null;
//   }

//   append(data) {
//       const newNode = new Node(data);
//       if (!this.head) {
//           this.head = newNode;
//           return;
//       }

//       let current = this.head;
//       while (current.next) {
//           current = current.next;
//       }

//       current.next = newNode;
//   }

//   print(){
//     let curr = this.head 
//     let listvalues =''
//     while(curr){
//       listvalues+=` ${curr.data}`
//       curr= curr.next
//     }
//     console.log(listvalues);
//   }
// }

// function arrayToLinkedList(array) {
//   const linkedList = new LinkedList();

//   for (const element of array) {
//       linkedList.append(element);
//   }

//   return linkedList;
// }

// // Example usage:
// const array = [1, 2, 3, 4, 5];
// const linkedList = arrayToLinkedList(array);
// linkedList.print()


class Node{
  constructor (value){
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head =null
    this.size=0
    
  }

  append(value){
    const node = new Node(value)
    if(!this.head){
      this.head = node
      return
    }
      let curr = this.head
      while(curr.next){
        curr = curr.next
      }
      curr.next = node  
  }
  

  print(){
    let curr = this.head
    

    let listvalues = ''
    while(curr){
      listvalues+=` ${curr.value}`
      curr= curr.next
    }
    console.log(listvalues);
    

  }
}

// function arrayToLinkedList (array){
//   const linkedList = new LinkedList();
//   for(const element of array){
//     linkedList.append(element)
//   }
//   return linkedList
// }

const arr= [1,2,3,4,5]
const linkedList = new LinkedList()
for(const element of arr){
  linkedList.append(element)
}
linkedList.print()


