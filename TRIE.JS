class TrieNode{
  constructor() {
    this.children = {}
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode() 
    this.endSymbol = "*";
  }

  insert(word){
    let node = this.root;
    for(let char of word){
      if(!node.children[char]){
        node.children[char] = new TrieNode()
      }
      node = node.children[char]
    }
    node.isEnd = true
  }

  contains(word) {
    let node = this.root;
    for(let char of word){
      if(!node.children[char]){
        return false;
      }
      node = node.children[char]
    }
    return node.isEnd;
  }

  populateSuffixTree(word){
    for(let i=0;i<word.length;i++){
      this.insert(word.substring(i))
    }
  }
}


const trie = new Trie();
trie.populateSuffixTree('banana')
trie.populateSuffixTree('shabil')

trie.insert('apple')
trie.insert('shabil')

trie.insert("app")
trie.insert('banana')
console.log(trie);
console.log(trie.contains('bil'));
console.log(trie.contains('a'));
