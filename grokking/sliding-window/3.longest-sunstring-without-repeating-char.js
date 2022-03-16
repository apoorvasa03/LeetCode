/** time - o(n) space - o(k)
 * Time complexity : O(2n)=O(n). In the worst case each character will be visited twice by right and left
 * Space complexity : O(min(n, m)). We need O(k) space for checking a substring has no duplicate characters,
 *  where k is the size of the Set. The size of the Set is upper bounded by the size of the string n and 
 *  the size of the charset/alphabet mm.
 */

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

var lengthOfLongestSubstring1 = function(s) {
    
  let longestSubStringLen = 0
  let left = 0
  let set = new Set()

  for(let right = 0; right < s.length; right++){
      if(set.has(s[right])){
          set.delete(s[left])
          left++
      }
      set.add(s[right])
      longestSubStringLen = Math.max(longestSubStringLen, set.size)
  }
  return longestSubStringLen
}

console.log(lengthOfLongestSubstring("a"))
console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3
console.log(lengthOfLongestSubstring("abaaac"))  // 2