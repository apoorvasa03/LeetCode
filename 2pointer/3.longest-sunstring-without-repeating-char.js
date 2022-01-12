var lengthOfLongestSubstring = function(s) {
    let right = 0, left = 0;
    let set = new Set()
    let maxSubStringLength = 0

    while(right < s.length){
      if(!set.has(s[right])){
        set.add(s[right])
        maxSubStringLength = Math.max(set.size, maxSubStringLength) 
        right++
      }else{
        set.delete(s[left])
        left++
      }
    }

    return maxSubStringLength
};  

console.log(lengthOfLongestSubstring("a"))
console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3
console.log(lengthOfLongestSubstring("abaaac"))  // 2