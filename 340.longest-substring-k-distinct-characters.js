/**
 * Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.
 * Input: s = "eceba", k = 2
 * Output: 3
 * Explanation: The substring is "ece" with length 3.
 */


/** time - o(n) space - o(k)
 * time - : O(N) in the best case of k distinct characters in the string and O(Nk) in the worst case of N distinct characters in the string.
*/
function lengthOfLongestSubstringKDistinct(s, k){
    let left =0;
    let right =0;
    let map = new Map()
    let maxLength = 0

    while(right < s.length){
        // set the char in s with its index and increment the right
        map.set(s[right], right++)

        if(map.size > k){
            // find the char which was added first. updated the left with its value and delete it. 
            let index = Math.min(...map.values())
            left = index + 1
            map.delete(s[index])
        }

       maxLength = Math.max(maxLength, right - left)
    }

    return maxLength;
}

console.log(lengthOfLongestSubstringTwoDistinct("eceba", 2)) // 3