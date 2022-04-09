function Node(){
    this.children = {};
    this.endOfWord = false
  }
  
  var Trie = function() {
      this.root = new Node()
  };
  
  Trie.prototype.insert = function(word) {
      let current = this.root;
      for(let char of word){
        if(!(char in current.children)){
          current.children[char] = new Node();
        }
        current = current.children[char]
      }
      current.endOfWord = true;
  };
  
  /** 
   * @param {string} word
   * @return {boolean}
   */
  Trie.prototype.search = function(word) {
      let current = this.root;
      for(let char of word){
          if(!(char in current.children)) return false;
          current = current.children[char]
      }
  
      return current.endOfWord
  };
  
  
  Trie.prototype.startsWith = function(prefix) {
      let current = this.root;
      for(let char of prefix){
        if(!(char in current.children)) return false;
        current = current.children[char]
      }
      return true
  };
  
  
  let trie = new Trie();
  console.log(trie.insert("apple"));
  console.log(trie.search("apple"));   // return True
  console.log(trie.search("app"))    // return False
  console.log(trie.startsWith("app"))// return True
  console.log(trie.insert("app"))
  console.log(trie.search("app"))    // return True