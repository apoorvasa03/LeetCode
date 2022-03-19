/** time: o(n) */
var characterReplacement1 = function(s, k) {
    let longestSubstring = 0
    let map = new Map()
    let left = 0
    let freqMax = 0

    for(let right = 0; right < s.length; right++){
        map.set(s[right], (map.get(s[right]) || 0)+1)
        freqMax = Math.max(freqMax, map.get(s[right])) 

        while((right -left +1) - freqMax > k){ 
            if(map.get(s[left]) > 1){
                map.set(s[left], map.get(s[left]) -1)
            }else{
                map.delete(s[left])
            }
            left++
        }
        longestSubstring = Math.max(longestSubstring, right - left + 1)
    }
    return longestSubstring
};

/** time: o(26n)*/
var characterReplacement = function(s, k) {
    let longestSubstring = 0
    let map = new Map()
    let left = 0

    for(let right = 0; right < s.length; right++){
        map.set(s[right], (map.get(s[right]) || 0)+1)
        // check if length of the window - most frequent word in the slide window is less then given k 
        while((right -left +1) - Math.max(...map.values()) > k){  //  Math.max(...map.values()) this adds 26 to the time complexity
            if(map.get(s[left]) > 1){
                map.set(s[left], map.get(s[left]) -1)
            }else{
                map.delete(s[left])
            }
            left++
        }
        longestSubstring = Math.max(longestSubstring, right - left + 1)
    }
    return longestSubstring
};

console.log(characterReplacement("BAAAB", 2))   //5
console.log(characterReplacement("ABAB", 2))    //4
console.log(characterReplacement("AABABBA", 1)) //4
