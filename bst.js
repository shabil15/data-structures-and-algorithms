// class Node{
//   constructor(value){
//     this.value = value
//     this.left = null
//     this.right = null
//   }
// }

// class BinarySearchTree{
//   constructor() {
//     this.root = null
//   }

//   isEmpty(){
//     return this.root ===null
//   }
  
//   insert(value){
//     const node = new Node(value)
//     if(this.isEmpty()){
//       this.root = node
//     }else{
//       this.insertNode(this.root,node)
//     }
//   }

//   insertNode(root,node){
//     if(node.value < root.value){
//       if(root.left === null){
//         root.left = node
//       }else{
//         this.insertNode(root.left,node)
//       }
//     }else{
//       if(root.right === null){
//         root.right = node
//       }else{
//         this.insertNode(root.right,node)
//       }
//     }
//   }

 


//   search(root,value){
//     if(this.isEmpty()){
//       return false
//     }else{
//       if(root.value ===value){
//         return true
//       }else if(value < root.value){
//         return this.search (root.left,value)
//       }else{
//         return this.search(root.right,value)
//       }
//     }
//   }


//   preOrder(root){
//     if(root){
//       console.log(root.value);
//       this.preOrder(root.left)
//       this.preOrder(root.right)
//     }
//   }

//   inOrder(root){
//     if(root){
      
//       this.inOrder(root.left)
//       console.log(root.value);
//       this.inOrder(root.right)
//     }
//   }

//   postOrder(root){
//     if(root){
//       this.postOrder(root.left)
//       this.postOrder(root.right)
//       console.log(root.value);    
//     }
//   }

//   levelOrder(){
//     const queue = []
//     queue.push(this.root)
//     while(queue.length){
//       let cur = queue.shift()
//       console.log(cur.value);
//       if(cur.left){
//         queue.push(cur.left)
//       }
//       if(cur.right){
//         queue.push(cur.right)
//       }
//     }
//   }

//   min(root){
//     if(!root.left){
//       return root.value
//     }else{
//       return this.min(root.left)
//     }
//   }

//   max(root){
//     if(!root.right){
//       return root.value
//     }else {
//       return this.max(root.right)
//     }
//   }


//   delete(value){
//     this.root = this.deleteNode(this.root,value)
//   }

//   deleteNode(root,value){
//     if(root === null){
//       return root
//     }
//     if(value< root.value){
//       root.left =this.deleteNode(root.left,value)
//     }else if(value > root.value){
//       root.right = this.deleteNode(root.right,value)
//     }else{
//       if(!root.left && !root.right){
//         return null
//       }
//       if(!root.left){
//         return root.right
//       }else if(!root.right) {
//         return root.left
//       }

//       root.value = this.min(root.right)
//       root.right = this.deleteNode(root.right,root.value)
//     }
//     return root 
//   }


//   findClosestValue(target){
//     return this.findClosestValueInBst(this.root,target)
//   }

//   findClosestValueInBst(tree,target){
//     let closest = tree.value

//     const traverse = (inputTree) =>{
//       if(inputTree === null ) return;
//       if(Math.abs(target -closest) > Math.abs(target -inputTree.value)){
//         closest  = inputTree.value
//       }

//       if(target < inputTree.value){
//         traverse (inputTree.left);
//       }else {
//         traverse (inputTree.right)
//       }
//     }

//     traverse(tree);
//     return closest;
//   }
// }

const BST  = new BinarySearchTree()
console.log(BST.isEmpty())

BST.insert(10)
BST.insert(5)
BST.insert(15)
BST.insert(3)
BST.insert(7)
// BST.preOrder(BST.root)
// BST.postOrder(BST.root)
BST.levelOrder();

BST.levelOrder();

const target = 15;
const closestval = BST.findClosestValue(target)
console.log("the closest " ,closestval);
// console.log(BST);
// console.log(BST.min(BST.root));
// console.log(BST.max(BST.root));

// console.log(BST.search(BST.root,10));
