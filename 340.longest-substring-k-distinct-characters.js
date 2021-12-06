/**
 * Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.
 * Input: s = "eceba", k = 2
 * Output: 3
 * Explanation: The substring is "ece" with length 3.
 */


function lengthOfLongestSubstringTwoDistinct(s){
    let left =0;
    let right =0;
    let set = new Set()
    let maxLength = 0

    while(right < s.length){
        if(!set.has(s[right]) && set.size <= 2){
            set.add(s[right]);
            maxLength = Math.max(maxLength, set.size)
            right++
        }else if(!set.has(s[right]) && set.size === 2){
            set.delete(s[left])
            left++
        }else if(set.has(s[right])){
            maxLength += 1
            right++
        }
    }
    return maxLength;
}

console.log(lengthOfLongestSubstringTwoDistinct("leeeleeeeete")) // 3