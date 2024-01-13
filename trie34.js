// class TrieNode{
//   constructor() {
//     this.children ={}
//     this.isEnd = false;
//   }
// }

// class Trie{
//   constructor() {
//     this.root = new TrieNode()
//     this.endSymbol = '*'
//   }

//   insert(word){
//     let node = this.root;
//     for(let char of word){
//       if(!node.children[char]){
//         node.children[char]= new TrieNode()
//       }
//       node = node.children[char]
//     }
//     node.isEnd = true
//   }

//   contains(word){
//     let node = this.root;
//     for(let char of word){
//       if(!node.children[char]){
//         return false
//       }
//       node= node.children[char]
//     }
//     return node.isEnd
//   }

//   populateSuffixTree(word){
//     for (let i = 0; i < word.length; i++) {
//       this.insert(word.substring( i ));
//     }
//   }

//   populatePreffixTree(word){
//     for(let i=0;i<word.length;i++){
//       this.insert(word.substring(0,i+1))
//     }
//   }
// }

class TrieNode{
  constructor() {
    this.children = {}
    this.isEnd = true
  } 
}

class Trie {
  constructor() {
    this.root = new TrieNode()
    this.endSymbol = '*'
  }

  insert(word){
    let node = this.root
    for(let char of word){
      if(!node.children[char]){
        node.children[char] = new TrieNode()
      }
      node = node.children[char]
    }
    node.isEnd = true
  }

  contains(word){
    let node = this.root
    for(let char of word){
      if(!node.children[char]){
        return false
      }
      node = node.children[char]
    }
    return node.isEnd
  }

  populateSuffixTree(word){
    for(let i=0;i<word.length;i++){
      this.insert(word.substr(i))
    }
  }

  populatePreffixTree(word){
    for(let i=0;i<word.length;i++){
      this.insert(word.substr(0,i+1))
    }
  }
}

const trie = new Trie();
trie.populatePreffixTree('banana')
trie.insert('cater')
trie.insert("cat")
trie.insert('car')
console.log(trie);
console.log(trie.contains('na'));
console.log(trie.contains('ba'));