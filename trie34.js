class TrieNode{
  constructor() {
    this.children ={}
    this.isEnd = false
  }
}

class Trie{
  constructor(){
    this.root = new TrieNode()
    this.endSymbol = '*'
  }

  insert(word){
    let node = this.root
    for(let char of word){
      if(!node.children[char]){
        node.children[char]= new TrieNode()
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
      this.insert(word.substring(i))
    }
  }
}

const trie = new Trie();
trie.populateSuffixTree('banana')
trie.insert('cater')
trie.insert("cat")
trie.insert('car')
console.log(trie);
console.log(trie.contains('na'));
console.log(trie.contains('car'));