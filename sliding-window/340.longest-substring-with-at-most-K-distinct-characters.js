/** time: o(n)  space: o(1)
 time = since we visit each item only twice its o(2n) => o(n)
*/
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let map = new Map();
    let maxlength = 0
    let left = 0

    for(let right = 0; right < s.length; right++){
        
        map.set(s[right], (map.get(s[right]) || 0) + 1)
        
        while(map.size > k){
            if(map.get(s[left]) == 1){
                map.delete(s[left])
            }else{
                map.set(s[left], map.get(s[left]) - 1)
            }
            left++
        }
        maxlength = Math.max(maxlength, right - left + 1)
    }

    return maxlength
};

var lengthOfLongestSubstringKDistinct1 = function(s, k) {
    let map = new Map();
    let maxlength = 0
    let left = 0;
    let right = 0
    if(k === 0) return 0 // check this

    while(right < s.length){
        
        if(map.size < k || map.has(s[right])){
            map.set(s[right], (map.get(s[right]) || 0) + 1)
            maxlength = Math.max(maxlength, right - left + 1)
            right++
        }else{
                if(map.get(s[left]) <= 1){
                    map.delete(s[left])
                }else{ 
                    map.set(s[left], map.get(s[left]) -1)
                }
                left++  
        }
    }
    return maxlength
}

console.log(lengthOfLongestSubstringKDistinct("aa", 0)) // 0
console.log(lengthOfLongestSubstringKDistinct("ababacccccc", 2)) // 7
console.log(lengthOfLongestSubstringKDistinct("abaccc", 2)) // 4
console.log(lengthOfLongestSubstringKDistinct("eceba", 2)) // 3
console.log(lengthOfLongestSubstringKDistinct("aa", 1)) // 2