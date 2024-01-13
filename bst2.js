// class Node{
//   constructor(value){
//     this.value = value;
//     this.left = null
//     this.right = null
//   }
// }

// class BinarySearchTree{
//   constructor() {
//     this.root = null
//   }

//   isEmpty(){
//     return this.root === null
//   }

//   insert(value){
//     let node = new Node(value)
//     if(this.isEmpty()){
//       this.root = node
//     }else{
//       this.insertNode(this.root,node)
//     }
//   }

//   insertNode(root,node){
//     if(node.value < root.value){
//       if(root.left===null){
//         root.left = node
//       }else{
//         this.insertNode(root.left,node)
//       }
//     }else {
//       if(root.right === null){
//         root.right = node
//       }else {
//         this.insertNode(root.right,node)
//       }
//     }
//   }

//    search(root,value){
//     if(this.isEmpty()){
//       return false
//     }
//     if(root.value === value){
//       return true
//     }else if(value < root.value){
//       return this.search(root.left,value)
//     }else{
//       return this.search(root.right,value)
//     }
//    }

//    preOrder(root){
//     if(root){
//       console.log(root.value);
//       this.preOrder(root.left)
//       this.preOrder(root.right)
//     }
//    }

//    inOrder(root){
//     if(root){
//       this.inOrder(root.left)
//       console.log(root.value);
//       this.inOrder(root.right)
//     }
//    }

//    postOrder(root){
//     if(root){
//       this.postOrder(root.left)
//       this.postOrder(root.right)
//       console.log(root.value);
//     }
//    }

//    levelOrder(){
//     const queue = []
//     queue.push(this.root)
//     while(queue.length){
//       let cur = queue.shift()
//       console.log(cur.value);
//       if(cur.left){
//         queue.push(cur.left)
//       }
//       if(cur.right){
//         queue.push(cur.right )
//       }
//     }
//    }
// }


class Node{
  constructor(v) {
    
  }
}

const BST  = new BinarySearchTree()
console.log(BST.isEmpty())

BST.insert(10)
BST.insert(5)
BST.insert(15)
BST.insert(3)
BST.insert(7)
console.log(BST.isEmpty())

// BST.preOrder(BST.root)
// BST.postOrder(BST.root)
// BST.levelOrder();

BST.levelOrder();

// const target = 15;
// const closestval = BST.findClosestValue(target)
// console.log("the closest " ,closestval);