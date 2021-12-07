/**
 * Given a string s, return the length of the longest substring that contains at most two distinct characters.
    Example 1: 

    Input: s = "eceba"
    Output: 3
    Explanation: The substring is "ece" which its length is 3.

    Example 2:

    Input: s = "ccaabbb"
    Output: 5
    Explanation: The substring is "aabbb" which its length is 5.
 */

/**
 * Time - o(n^2) Space o(1)
 * space - o(1) Space complexity : since additional space is used only for a map with at most 3 elements
 */
const lengthOfLongestSubstringTwoDistinct = function(s){
    let left = 0
    let map = new Map();
    let maxLength = 0


    for(let right =0; right < s.length; right++){

        if(map.has(s[right])) map.set(s[right], map.get(s[right]) +1)
        else map.set(s[right], 1)

        if(map.size > 2){
            if(map.get(s[left]) > 1) map.set(s[left], map.get(s[left]) -1)
            else{ map.delete(s[left])}
            left++
        }

        maxLength = Math.max(maxLength, right - left +1)
    }

    return maxLength
}

var lengthOfLongestSubstringTwoDistinct1 = function(s) {
    let [left, right, maxLength] = [0, 0, 0];
    let map = new Map()

    while(right < s.length){
        if(map.has(s[right]) || map.size < 2){
            map.set(s[right], right);
            maxLength = Math.max(maxLength, right - left +1)
            right++
        }else{
            let firstInsertedValue = Infinity;
            let firstInsertedKey
            for(let [key, value] of map.entries()){
                if(value < firstInsertedValue){
                    firstInsertedValue = value
                    firstInsertedKey = key
                }
            }
            map.delete(firstInsertedKey);
            left = firstInsertedValue + 1;

        }
    }
    return maxLength
}
console.log(lengthOfLongestSubstringTwoDistinct1("eceba", 2)) // 3