
  /**Time: o(N+M)  space: o(1)
   * Time: since we pointer, we are scanning s and t string once, so O(S+T)
   * Space: we havent used extra memory . so O(1)
  */
   var backspaceCompare = function(s, t) {
    let sPointer = s.length -1
    let tPointer = t.length -1
     while(sPointer >=0 || tPointer >= 0){
         sPointer = clearBackSpace(s, sPointer)
         tPointer = clearBackSpace(t, tPointer)
         if(s[sPointer] != t[tPointer]) return false
         sPointer--; tPointer--;
     }

     return true
  }

  function clearBackSpace(str, index){
      let skip = 0
      /** here we are checking whether char at the index is backspace, 
       * if true we are incrementing the skip and moving to next index,
       * in the next loop, since skip count is grater than 0, we can skip that char in the str and since we used the skin count, we decrement it*/
      while(index >=0){
          if(str[index] == '#'){
              skip++; index--
           } else if(skip > 0){
              skip--; index--
            }else {
              break
            }
      }
      return index
  }

  

console.log(backspaceCompare("ab#c", "ad#c"))
console.log(backspaceCompare("ab##", "c#d#"))
console.log(backspaceCompare("a#c", "b"))
console.log(backspaceCompare("###", "##"))

