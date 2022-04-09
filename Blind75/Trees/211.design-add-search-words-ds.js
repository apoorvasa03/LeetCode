function Node(){
    this.children = {};
    this.isWordEnding = false
  }
  
  var WordDictionary = function() {
      this.root = new Node()
  };
  
  WordDictionary.prototype.addWord = function(word) {
      let current = this.root;
  
      for(let char of word){
          if(!(char in current.children)){
            current.children[char] = new Node()
          }
          current = current.children[char]
      }
      current.isWordEnding = true
  };
  
  /** 
   * @param {string} word
   * @return {boolean}
   */
  WordDictionary.prototype.search = function(word) {
    let current = this.root;
      function dfs(current, i){
          if(i === word.length) return current.isWordEnding
          let char = word[i];
  
          if(char === '.'){
            for (const child of Object.values(current.children)) {
              if (dfs(child, i + 1)) return true
            }
            return false
          }else{
            if(!(char in current.children)) return false
            return dfs(current.children[char], i+1)
          }
      }
  
      return dfs(current, 0)
      
  };

  WordDictionary.prototype.search1 = function(word){
    let current = this.root
    function dfs(index, current){
      for(let i = index; i < word.length; i++){
        let char = word[i]
  
        if(char === '.'){
            for(let child of Object.values(current.children)){
                if(dfs(i+1, child)) return true
            }
            return false
        }else{
          if(!(char in current.children)) return false
          current = current.children[char]
        }
      }
      return current.isWordEnding
    }
  
    return dfs(0, current)
      
  }
  
  let wordDictionary = new WordDictionary();
  wordDictionary.addWord("bad");
  wordDictionary.addWord("dad");
  wordDictionary.addWord("mad");
  console.log(wordDictionary.search("pad")); // return False
  console.log(wordDictionary.search("bad")); // return True
  console.log(wordDictionary.search(".ad")); // return True
  console.log(wordDictionary.search("b..")); // return True