/** Given a string s, find the length of the longest substring without repeating characters */

/** time o(n)  space - o(min(m,n))
 *  Time complexity : O(2n) = O(n). In the worst case each character will be visited twice by i and j.
 *  Space complexity : O(min(n, m)). We need O(k) space for checking a substring has no duplicate characters, where k is the size of the Set. The size of the Set is upper bounded by the size of the string n and the size of the charset/alphabet m.
*/
var lengthOfLongestSubstring = function(s) {
    let left =0
    let right =0;
    let maxSubStringLength = 0 
    let set = new Set()
    while(right < s.length){
        if(!set.has(s[right])){
            set.add(s[right]);
            maxSubStringLength = Math.max(maxSubStringLength, set.size)
            right++
        }else{
            set.delete(s[left]);
            left++
        }
    }
    return maxSubStringLength
}

console.log(lengthOfLongestSubstring("a"))
console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkewj")) // 3
console.log(lengthOfLongestSubstring("abaaac"))  // 2
 
